import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const agent1 = await prisma.agent.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            name: "EDP SMART",
            link_logo: "https://i.ibb.co/5vtZdfj/edp-logo.jpg",
            state_origin: "SP",
            cost_kwh: 6100,
            lim_min_kwh: 500,
            total_customers: 750,
            evaluation_customers: 8,
        },
    });

    const agent2 = await prisma.agent.upsert({
        where: { id: 2 },
        update: {},
        create: {
            id: 2,
            name: "AES TIETE INTEGRA",
            link_logo: "https://i.ibb.co/607s639/aes-tiete.png",
            state_origin: "SP",
            cost_kwh: 5700,
            lim_min_kwh: 550,
            total_customers: 350,
            evaluation_customers: 7,
        },
    });

    const agent3 = await prisma.agent.upsert({
        where: { id: 3 },
        update: {},
        create: {
            id: 3,
            name: "MATRIX COM",
            link_logo: "https://i.ibb.co/WNXNfwZ/matrix-logo.jpg",
            state_origin: "SP",
            cost_kwh: 8000,
            lim_min_kwh: 700,
            total_customers: 50,
            evaluation_customers: 6.7,
        },
    });

    const agent4 = await prisma.agent.upsert({
        where: { id: 4 },
        update: {},
        create: {
            id: 4,
            name: "COPEL COM",
            link_logo: "https://i.ibb.co/dtf6fSd/copel-logo.png",
            state_origin: "PR",
            cost_kwh: 4500,
            lim_min_kwh: 650,
            total_customers: 980,
            evaluation_customers: 9,
        },
    });


    const agent5 = await prisma.agent.upsert({
        where: { id: 5 },
        update: {},
        create: {
            id: 5,
            name: "COMERC POWER",
            link_logo: "https://i.ibb.co/b5KKTPC/comerc-logo.jpg",
            state_origin: "SP",
            cost_kwh: 5200,
            lim_min_kwh: 800,
            total_customers: 500,
            evaluation_customers: 8.5,
        },
    });


    const agent6 = await prisma.agent.upsert({
        where: { id: 6 },
        update: {},
        create: {
            id: 6,
            name: "2W VAREJISTA",
            link_logo: "https://i.ibb.co/C5kFddt/2w-logo.png",
            state_origin: "SP",
            cost_kwh: 3500,
            lim_min_kwh: 813,
            total_customers: 35,
            evaluation_customers: 7.5,
        },
    });

    const agent7 = await prisma.agent.upsert({
        where: { id: 7 },
        update: {},
        create: {
            id: 7,
            name: "ENGIE BR CVE",
            link_logo: "https://i.ibb.co/Xp4yPmf/engie-logo.png",
            state_origin: "SC",
            cost_kwh: 9000,
            lim_min_kwh: 1000,
            total_customers: 158,
            evaluation_customers: 6.5,
        },
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
    });