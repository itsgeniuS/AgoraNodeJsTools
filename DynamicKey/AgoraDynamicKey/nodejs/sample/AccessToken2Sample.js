const { AccessToken2, ServiceRtc } = require("../src/AccessToken2");
const RtcRole = require("../src/RtcTokenBuilder").Role;

// Need to set environment variable AGORA_APP_ID
const appID = process.env.AGORA_APP_ID;
// Need to set environment variable AGORA_APP_CERTIFICATE
const appCertificate = process.env.AGORA_APP_CERTIFICATE;

const channelName = "7d72365eb983485397e3e3f9d460bdda";
const uid = 2882341273;
const account = "2882341273";
const role = RtcRole.PUBLISHER;
const expirationTimeInSeconds = 3600;
const currentTimestamp = Math.floor(Date.now() / 1000);

let token = new AccessToken2(appID, appCertificate, currentTimestamp, expirationTimeInSeconds);
let rtc_service = new ServiceRtc(channelName, uid);
token.add_service(rtc_service);
console.log(token.build());
