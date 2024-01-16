const RtcTokenBuilder = require("../src/RtcTokenBuilder2").RtcTokenBuilder;
const RtcRole = require("../src/RtcTokenBuilder2").Role;

// Need to set environment variable AGORA_APP_ID
const appID = process.env.AGORA_APP_ID;
// Need to set environment variable AGORA_APP_CERTIFICATE
const appCertificate = process.env.AGORA_APP_CERTIFICATE;

const channelName = "7d72365eb983485397e3e3f9d460bdda";
const uid = 2882341273;
const account = "2882341273";
const role = RtcRole.PUBLISHER;
const tokenExpirationInSecond = 3600;
const privilegeExpirationInSecond = 3600;
const joinChannelPrivilegeExpireInSeconds = 3600;
const pubAudioPrivilegeExpireInSeconds = 3600;
const pubVideoPrivilegeExpireInSeconds = 3600;
const pubDataStreamPrivilegeExpireInSeconds = 3600;

// Build token with uid
const tokenA = RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channelName, uid, role, tokenExpirationInSecond, privilegeExpirationInSecond);
console.log("Token with int uid: " + tokenA);

// Build token with user account
const tokenB = RtcTokenBuilder.buildTokenWithUserAccount(
    appID,
    appCertificate,
    channelName,
    account,
    role,
    tokenExpirationInSecond,
    privilegeExpirationInSecond
);
console.log("Token with user account: " + tokenB);

const tokenC = RtcTokenBuilder.buildTokenWithUidAndPrivilege(
    appID,
    appCertificate,
    channelName,
    uid,
    tokenExpirationInSecond,
    joinChannelPrivilegeExpireInSeconds,
    pubAudioPrivilegeExpireInSeconds,
    pubVideoPrivilegeExpireInSeconds,
    pubDataStreamPrivilegeExpireInSeconds
);
console.log("Token with int uid and privilege:" + tokenC);

const tokenD = RtcTokenBuilder.BuildTokenWithUserAccountAndPrivilege(
    appID,
    appCertificate,
    channelName,
    account,
    tokenExpirationInSecond,
    joinChannelPrivilegeExpireInSeconds,
    pubAudioPrivilegeExpireInSeconds,
    pubVideoPrivilegeExpireInSeconds,
    pubDataStreamPrivilegeExpireInSeconds
);
console.log("Token with user account and privilege:" + tokenD);
