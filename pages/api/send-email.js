// send-email.js
import { testMail } from "../../services/aws-ses";

export default async function checkUserAPI(request, response) {
const message = request.body
console.log(message)
const result = await testMail("hwan2924@uni.sydney.edu.au",message);
console.log(result)
    response.json(result);
}