export function getSortedUserIdsAndNames(user1, user2) {
  console.log("user1: ", user1);
  console.log("user2: ", user2);
  if (user1.id.localeCompare(user2.id) < 0) {
    return {
      userIDs: [user1.id, user2.id],
      userNames: [user1.name, user2.name],
    };
  } else {
    return {
      userIDs: [user2.id, user1.id],
      userNames: [user2.name, user1.name],
    };
  }
}
