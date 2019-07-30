--
-- PostgreSQL database dump
--

-- Dumped by pg_dump version 11.2 (Ubuntu 11.2-1.pgdg18.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: connect_in; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA connect_in;


ALTER SCHEMA connect_in OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: connect_in; Owner: postgres
--

CREATE SEQUENCE connect_in.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE connect_in.user_id_seq OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: users; Type: TABLE; Schema: connect_in; Owner: postgres
--

CREATE TABLE connect_in.users (
    id integer DEFAULT nextval('connect_in.user_id_seq'::regclass) NOT NULL,
    first_name text,
    last_name text,
    gender text,
    interest text,
    likes integer,
    professional text,
    posts text [],
    userpic bytea, 
    connections text [],
    created_at timestamp with time zone DEFAULT now(),
    deleted_at timestamp with time zone,
    updated_at timestamp with time zone
);

ALTER TABLE connect_in.users OWNER TO postgres;


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: connect_in; Owner: postgres
--

SELECT pg_catalog.setval('connect_in.user_id_seq', 1, false);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

