import kue from 'kue';

const queue = kue.createQueue();
const jobb = {
    phoneNumber: '4153518780',
    message: 'This is the code to verify your account',
};

const queueName = 'push_notification_code';

const job = queue.create(queueName, jobb).save((err) => {
    if (!err) console.log(`Notification job created: ${job.id}`);
});

job.on('complete', () => {
    console.log(`Notification job ${job.id} completed`);
}  
);

job.on('failed', (errorMessage) => {
    console.log(`Notification job ${job.id} failed: ${errorMessage}`);
}
);
