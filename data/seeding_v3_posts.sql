BEGIN;

TRUNCATE TABLE "user_post" CASCADE;
TRUNCATE TABLE "post_message" CASCADE; -- Ajout de TRUNCATE pour "post_message" si nécessaire
TRUNCATE TABLE "post_category" CASCADE;

TRUNCATE TABLE "post" CASCADE;

INSERT INTO "category_post" ("id", "name") VALUES
    (1, 'Etirements'),
    (2, 'Aide et astuces'),
    (3, 'Discussions générales'),
    (4, 'Autre');

INSERT INTO "post" ("id", "title", "description_content", "category_post_id") VALUES
    (1, 'Comment réaliser mes étirements?', 'Bonjour, je souhaiterais savoir comment bien réaliser mes étirements avez-vous des explications à me donner?', 1),
    (2, 'Comment réaliser mes étirements?', 'Bonjour, je souhaiterais savoir comment bien réaliser mes étirements avez-vous des explications à me donner?', 2),
    (3, 'Comment réaliser mes étirements?', 'Bonjour, je souhaiterais savoir comment bien réaliser mes étirements avez-vous des explications à me donner?', 3),
    (4, 'Comment réaliser mes étirements?', 'Bonjour, je souhaiterais savoir comment bien réaliser mes étirements avez-vous des explications à me donner?', 4);

ALTER TABLE "post" ADD FOREIGN KEY ("category_post_id") REFERENCES "category_post"("id");

TRUNCATE TABLE "user_post" CASCADE;
INSERT INTO "user_post" ("id", "user_id", "post_id") VALUES
    (1, 0, 1),
    (2, 0, 2),
    (3, 0, 3),
    (4, 0, 4);

COMMIT;