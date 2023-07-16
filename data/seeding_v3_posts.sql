BEGIN;

TRUNCATE TABLE "post" CASCADE;

INSERT INTO "category_post" ("id", "name") VALUES
    (1, 'Etirements'),
    (2, 'Aide et astuces'),
    (3, 'Discussions générales'),
    (4, 'Autre');

INSERT INTO "post" ("id", "title", "description_content", "category_post_id") VALUES
(1,'Comment réaliser mes étirements?', 'Bonjour, je souhaiterais savoir comment bien réaliser mes étirements avez vous des explications à me donner?', 2),
(2,'Comment réaliser mes étirements?', 'Bonjour, je souhaiterais savoir comment bien réaliser mes étirements avez vous des explications à me donner?', 1),
(3,'Comment réaliser mes étirements?', 'Bonjour, je souhaiterais savoir comment bien réaliser mes étirements avez vous des explications à me donner?', 3),
(4,'Comment réaliser mes étirements?', 'Bonjour, je souhaiterais savoir comment bien réaliser mes étirements avez vous des explications à me donner?', 4);


ALTER TABLE "post" ADD FOREIGN KEY ("category_post_id") REFERENCES "category_post"("id");
COMMIT;
