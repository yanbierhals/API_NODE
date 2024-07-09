-- Table: public.CATEGORIA

-- DROP TABLE IF EXISTS public."CATEGORIA";

CREATE TABLE IF NOT EXISTS public."CATEGORIA"
(
    "ID" integer NOT NULL DEFAULT nextval('"CATEGORIA_ID_seq"'::regclass),
    "NOME" character varying(100) COLLATE pg_catalog."default" NOT NULL,
    "DESCRICAO" text COLLATE pg_catalog."default",
    CONSTRAINT "CATEGORIA_pkey" PRIMARY KEY ("ID")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."CATEGORIA"
    OWNER to postgres;


-- Table: public.PRODUTO

-- DROP TABLE IF EXISTS public."PRODUTO";

CREATE TABLE IF NOT EXISTS public."PRODUTO"
(
    "ID" integer NOT NULL DEFAULT nextval('"PRODUTO_ID_seq"'::regclass),
    "NOME" character varying(100) COLLATE pg_catalog."default" NOT NULL,
    "PRECO" numeric(10,2) NOT NULL,
    "DESCRICAO" text COLLATE pg_catalog."default",
    "CATEGORIA_ID" integer,
    CONSTRAINT "PRODUTO_pkey" PRIMARY KEY ("ID"),
    CONSTRAINT "PRODUTO_CATEGORIA_ID_fkey" FOREIGN KEY ("CATEGORIA_ID")
        REFERENCES public."CATEGORIA" ("ID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."PRODUTO"
    OWNER to postgres;