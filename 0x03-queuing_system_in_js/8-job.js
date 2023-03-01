import kue from 'kue';

const createPushNotificationsJobs = (jobs, queue) => {
    if (!Array.isArray(jobs)) {
        throw new Error('Jobs is not an array');
    }
    const queueName = 'push_notification_code_3';
    jobs.forEach((job) => {
        const jobb = queue.create(queueName, job).save((err) => {
            if (!err) console.log(`Notification job created: ${jobb.id}`);
        });
        jobb.on('complete', () => {
            console.log(`Notification job ${jobb.id} completed`);
        });
        jobb.on('failed', (errorMessage) => {
            console.log(`Notification job ${jobb.id} failed: ${errorMessage}`);
        });
        job.on("progress", (progress) =>
        console.log(`Notification job ${job.id} ${progress}% complete`)
        );
    });
};

module.exports = createPushNotificationsJobs;
