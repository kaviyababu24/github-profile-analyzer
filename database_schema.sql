CREATE TABLE `profiles` (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(255) DEFAULT NULL,
  name varchar(255) DEFAULT NULL,
  followers int DEFAULT NULL,
  following_count int DEFAULT NULL,
  public_repos int DEFAULT NULL,
  profile_url text,
  created_at timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);