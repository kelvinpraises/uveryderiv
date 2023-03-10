import getCommentById from "@/services/cyberConnect/getCommentById";
import getPostByPostId from "@/services/cyberConnect/getPostByPostId";
import getProfileByHandle from "@/services/cyberConnect/getProfileByHandle";
import scrapTownDataDB from "@/services/firebase/scrapTownDataDB";
import ellipsisAddress from "@/utils/ellipsisAddress";

export default function () {
  const metaData = async (handle: string) => {
    const {
      metadataInfo: { avatar, bio, coverImage, displayName },
      owner: { address },
    } = await getProfileByHandle(handle);

    return {
      avatar,
      bio,
      coverImage,
      displayName,
      address: ellipsisAddress(address),
    };
  };

  const issuesData = async (handle: string) => {
    const {
      metadataInfo: { avatar, bio, coverImage, displayName },
      owner: { address },
    } = await getProfileByHandle(handle);

    return {
      avatar,
      bio,
      coverImage,
      displayName,
      address: ellipsisAddress(address),
    };
  };

  const stageData = async (handle: string) => {
    const {
      metadataInfo: { avatar, bio, coverImage, displayName },
      owner: { address },
    } = await getProfileByHandle(handle);

    return {
      avatar,
      bio,
      coverImage,
      displayName,
      address: ellipsisAddress(address),
    };
  };

  const scrapTownIdeasData = async (handle: string) => {
    const { activeIssueId } = await scrapTownDataDB(handle);
    activeIssueId && getPostByPostId(activeIssueId);
    return { contentId: activeIssueId, comments: [] };
  };

  const scrapTownSquareData = async (handle: string) => {
    const { scrapTownPostId } = await scrapTownDataDB(handle);
    const post = await getPostByPostId(scrapTownPostId);
    const commentsContentIds = post?.content.comments.edges.map(
      (e) => e.node.contentID
    );

    let comments: (
      | {
          title: string;
          body: string;
          authorHandle: string;
          authorAddress: string;
          createdAt: string;
        }
      | undefined
    )[] = [];

    if (commentsContentIds) {
      comments = await Promise.all(
        commentsContentIds.map(async (c) => {
          let comment = await getCommentById(c);
          return comment?.content;
        })
      );
    }

    console.log(comments);

    return { contentId: scrapTownPostId, comments };
  };

  return {
    metaData,
    issuesData,
    stageData,
    scrapTownIdeasData,
    scrapTownSquareData,
  };
}
