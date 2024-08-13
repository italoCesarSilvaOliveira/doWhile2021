const socialMedia = {
  instagram: "it_a_lo_ol_i_vei",
  facebook: "italo.oliveira.58173",
  twitter: "taloCsarSilvaO4",
  youtube: "",
  github: "italoCesarSilvaOliveira",
};

function subsLinkSocial() {
  for (let li of social.children) {
    const socialL = li.getAttribute("class");
    li.children[0].href = `https://${socialL}.com/${socialMedia[socialL]}`;
  }
}

subsLinkSocial();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${socialMedia.github}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      imgGithub.src = data.avatar_url
        
    });
}

getGitHubProfileInfos();
