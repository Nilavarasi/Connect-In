GRANT All ON SCHEMA connect_in TO connect_in;
ALTER ROLE connect_in SET search_path TO connect_in;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA connect_in TO connect_in;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA connect_in TO connect_in;