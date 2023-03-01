import kue from 'kue';

const jobs = [
    {
        phoneNumber: '4153518780', 
        message: 'This is the code to verify your account',
    },
    {
        phoneNumber: '4153518781',
        message: 'This is the code 4562 to verify your account'
    },
    {
        phoneNumber: '4153518743',
        message: 'This is the code 4321 to verify your account'
    },
    {
        phoneNumber: '4153538781',
        message: 'This is the code 4562 to verify your account'
    },
    {
        phoneNumber: '4153118782',
        message: 'This is the code 4321 to verify your account'
    },
    {
        phoneNumber: '4153718781',
        message: 'This is the code 4562 to verify your account'
    },
    {
        phoneNumber: '4159518782',
        message: 'This is the code 4321 to verify your account'
    },
    {
        phoneNumber: '4158718781',
        message: 'This is the code 4562 to verify your account'
    },
    {
        phoneNumber: '4153818782',
        message: 'This is the code 4321 to verify your account'
    },
    {
        phoneNumber: '4154318781',
        message: 'This is the code 4562 to verify your account'
    },
    {
        phoneNumber: '4151218782',
        message: 'This is the code 4321 to verify your account'
    }
];

const queue = kue.createQueue();
const queueKey = "push_notification_code_2";


for (const job of jobs) {
    const jobb = queue.create('push_notification_code', job).save((err) => {
        if (!err) console.log(`Notification job created: ${jobb.id}`);
    });
    jobb.on('complete', () => {
        console.log(`Notification job ${jobb.id} completed`);
    });
    jobb.on('failed', (errorMessage) => {
        console.log(`Notification job ${jobb.id} failed: ${errorMessage}`);
    });
    jobb.on('progress', (progress) => {
        console.log(`Notification job ${jobb.id} ${progress}% complete`);
    });
};
