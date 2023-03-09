export const getProfileMetadata = async (profile: {
  handle: string;
  display_name: string;
  bio: string;
  avatar: string;
  cover_image: string;
}): Promise<string> => {
  const metadata = {
    ...profile,
    attributes: [],
    version: "1.1.0",
  };

  const rawResponse = await fetch(
    "https://api.pinata.cloud/pinning/pinJSONToIPFS",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIyYTU5OWNjZS0xOWJkLTQ3ZDgtYjA1Ni03NWU1ZmFhOGViM2YiLCJlbWFpbCI6ImtlbHZpbnByYWlzZXNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImRkNjA0YTBkMDA1NjU2ZGQyZmQzIiwic2NvcGVkS2V5U2VjcmV0IjoiNzI2NjExNjYyZWIwOTMzNjQ4OTNiOWFmMDdmYTBkMmYzMzBmZmVjMDFjZDA2ZmJmYTFjMGQ0NjkyODg5ODc2YiIsImlhdCI6MTY3ODIyNTcyNn0.D3KNxbhM6cOLnDBcbnD_ye6_uJHdTpdHCKkkFuctnUY",
      },
      body: JSON.stringify(metadata),
    }
  );
  const res = await rawResponse.json();

  console.log(res);

  return res.IpfsHash;
};
