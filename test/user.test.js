import supertest from "supertest"
import { web } from '../src/application/web.js';
import { prismaClient } from "../src/application/database.js";
import { logger } from "../src/application/logging.js";
import { createUserTest, removeTestUser } from "./test-util.js";

describe ('Post /api/users', function () {
    afterEach(async () => {
            await prismaClient.user.deleteMany({
                where: {
                    username : "akbar_id"
                }
            })
        })
    it ("should be able to register new user", async () => {

        const result = await supertest(web).post('/api/users').send({
            username : "akbar_id",
            password : "rahasia",
            name: "akbar"
        });

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("akbar_id");
        expect(result.body.data.name).toBe("akbar");
        expect(result.body.data.password).toBe(undefined);
    });

    it ("should rejected if request is invalid", async () => {

        const result = await supertest(web).post('/api/users').send({
            username : "",
            password : "",
            name: ""
        });

        logger.info(result.body)
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined;
    });

    it ("should be rejected if duplicate", async () => {

        let result = await supertest(web).post('/api/users').send({
            username : "akbar_id",
            password : "rahasia",
            name: "akbar"
        });
        logger.info(result.body);
        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("akbar_id");
        expect(result.body.data.name).toBe("akbar");
        expect(result.body.data.password).toBe(undefined);

         result = await supertest(web).post('/api/users').send({
            username : "akbar_id",
            password : "rahasia",
            name: "akbar"
        });

        logger.info(result.body);
        expect(result.status).toBe(400);
    
    });
});

describe ("post /api/user/login", function () {
    beforeEach(async () => {
        await createUserTest()
    });

    afterEach(async () => {
        await removeTestUser()
    });

    it("should be can login", async () => {
        const result = await supertest(web)
        .post('/api/users/login')
        .send({
            username : "test",
            password : "rahasia"
        });

        logger.info(result.body)

        expect(result.status).toBe(200)
        expect(result.body.data.token).toBeDefined();
        expect(result.body.data.token).not.toBe("test");
    })
})