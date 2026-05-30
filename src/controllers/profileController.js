const { getGithubProfile } = require("../utils/githubApi");
const connection = require("../config/db");

const analyzeProfile = async (req, res) => {
    try {
        const username = req.params.username;

        const profile = await getGithubProfile(username);

        const sql = `
        INSERT INTO profiles 
        (username, name, followers, following_count, public_repos, profile_url)
        VALUES (?, ?, ?, ?, ?, ?)
        `;

        const values = [
            profile.login,
            profile.name,
            profile.followers,
            profile.following,
            profile.public_repos,
            profile.html_url
        ];

        connection.query(sql, values, (err, result) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Database insert failed"
                });
            }

            res.json({
                success: true,
                message: "Profile saved to database",
                data: profile
            });
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "GitHub profile fetch failed"
        });
    }
};

const getAllProfiles = (req, res) => {
    const sql = "SELECT * FROM profiles";

    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Failed to fetch profiles"
            });
        }

        res.json({
            success: true,
            data: results
        });
    });
};

const getSingleProfile = (req, res) => {
    const username = req.params.username;

    const sql = "SELECT * FROM profiles WHERE username = ?";

    connection.query(sql, [username], (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Failed to fetch profile"
            });
        }

        res.json({
            success: true,
            data: results[0]
        });
    });
};

module.exports = {
    analyzeProfile,
    getAllProfiles,
    getSingleProfile
};