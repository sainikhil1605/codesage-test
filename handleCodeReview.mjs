const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const AdmZip = require('adm-zip');
const https = require('https');

exports.handler = async (event) => {
    const message = JSON.parse(event.Records[0].Sns.Message);
    const repo = message.repo;
    const issueNumber = message.issueNumber;

    const bucket = message.bucket;
// const bucket = event.Records[0].s3.bucket.name;
// const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));

//     try {
//         // Download the zip file from S3
//         const zipData = await s3.getObject({ Bucket: bucket, Key: key }).promise();
//         const zip = new AdmZip(zipData.Body);
//         let codeContent = '';

//         // Extract and concatenate the content of each .js file (or any other file types you are interested in)
//         zip.getEntries().forEach(entry => {
//             if (entry.entryName.endsWith('.js')) { // Filtering for JavaScript files, adjust as needed
//                 codeContent += zip.readAsText(entry) + '\n';
//             }
//         });
//         console.log(codeContent);
//         return await postCommentToGitHub(repo, issueNumber, comment);
//         // // Prepare data for OpenAI API call
//         // const postData = JSON.stringify({
//         //     prompt: 'Review this code:\n\n' + codeContent,
//         //     max_tokens: 150,
//         //     model: "code-davinci-002",
//         //     stop: ["\n", " Human:"],
//         // });

//         // const options = {
//         //     hostname: 'api.openai.com',
//         //     path: '/v1/engines/davinci/completions',
//         //     method: 'POST',
//         //     headers: {
//         //         'Content-Type': 'application/json',
//         //         'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
//         //     }
//         // };

//         // // Send a request to OpenAI API
//         // const openAIResponse = await new Promise((resolve, reject) => {
//         //     const req = https.request(options, (res) => {
//         //         let chunks = [];
//         //         res.on('data', (chunk) => chunks.push(chunk));
//         //         res.on('end', () => {
//         //             const body = Buffer.concat(chunks);
//         //             resolve(JSON.parse(body.toString()));
//         //         });
//         //     });

//         //     req.on('error', (e) => reject(e));
//         //     req.write(postData);
//         //     req.end();
//         // });

//         // console.log('OpenAI Review:', openAIResponse);
//         // return openAIResponse;
//     } catch (error) {
//         console.error('Error processing S3 event:', error);
//         throw new Error(`Error processing S3 event: ${error.message}`);
//     }
// };

// const axios = require('axios');
// const AWS = require('aws-sdk');
// const secretsManager = new AWS.SecretsManager();

// async function postCommentToGitHub(repo, issueNumber, comment) {
//     const secretName = "github/token";  // Name of your secret in Secrets Manager
//     const secret = await secretsManager.getSecretValue({ SecretId: secretName }).promise();
//     const token = JSON.parse(secret.SecretString).GITHUB_TOKEN;

//     const url = `https://api.github.com/repos/${repo}/issues/${issueNumber}/comments`;
//     const headers = {
//         'Authorization': `token ${token}`,
//         'User-Agent': 'AWS Lambda Function'
//     };
//     const data = { body: comment };

//     try {
//         const response = await axios.post(url, data, { headers });
//         console.log("Successfully posted comment to GitHub:", response.data);
//         return response.data;
//     } catch (error) {
//         console.error("Error posting comment to GitHub:", error);
//         throw error;
//     }
// }

// exports.handler = async (event) => {
//     // Assume that event contains the necessary repo, issueNumber, and comment
//     const repo = "username/repository";  // Adjust this to your repository
//     const issueNumber = 123;  // Adjust this to your issue/pr number
//     const comment = "Here is the review from OpenAI: ...";  // Assume this comes from your event


// };
