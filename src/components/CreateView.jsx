import React from "react";

export const CreateView = (props) => {
  const { userInfo } = props;

  return (
    <>
      <h4>
        {userInfo.name} (@{userInfo.login})
      </h4>
      <img src={userInfo.avatar_url} alt={userInfo.login} height="100" />
      <dl>
        <dt>Location</dt>
        <dd>{userInfo.location}</dd>
        <dt>Repositories</dt>
        <dd>{userInfo.public_repos}</dd>
      </dl>
    </>
  );
};
