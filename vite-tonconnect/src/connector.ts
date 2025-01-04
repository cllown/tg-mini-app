import { TonConnect } from "@tonconnect/sdk";

const dappMetadata = {
  manifestUrl:
    "https://gist.githubusercontent.com/siandreev/75f1a2ccf2f3b4e2771f6089aeb06d7f/raw/d4986344010ec7a2d1cc8a2a9baa57de37aaccb8/gistfile1.txt",
};

export const connector = new TonConnect(dappMetadata);

/* {
   "url": "<app-url>",                        // required
   "name": "<app-name>",                      // required
   "iconUrl": "<app-icon-url>",               // required
   "termsOfUseUrl": "<terms-of-use-url>",     // optional
   "privacyPolicyUrl": "<privacy-policy-url>" // optional
 } */
