const urlsByTarget = {
  newVolunteerForm:
    "https://docs.google.com/forms/d/e/1FAIpQLSc-2ShB-KY30NzRcYRVs9dG8V5D5WVCsH1d3UWcKIrGYJsaWg/viewform?usp=sf_link",

  newHelpNeededForm:
    "https://docs.google.com/forms/d/e/1FAIpQLSfcdITGcpw1kWxEunHVUz6aQZzgvrGOPs3UnJvzFNafWa3M3A/viewform?usp=sf_link",
  searchHelpNeededForm:
    "https://docs.google.com/spreadsheets/d/1840HvKqZPFYWHa7e6Sl5kcv1UBnOPw6VDA0vxH0Z7aU/edit#gid=63528022",

  templateRepository: "https://github.com/contentful/covid-19-site-template",
  imprint: "https://www.contentful.com/legal/de/",
  newTemplateIssue:
    "https://github.com/contentful/covid-19-site-template/issues/new"
};

export const urlFor = target => {
  const url = urlsByTarget[target];
  if (!url) {
    throw new TypeError(`No URL for target '${target}'`);
  }

  return url;
};
