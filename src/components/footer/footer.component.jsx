import SimpleReactFooter from "simple-react-footer";

class Footer extends SimpleReactFooter {
    render() {
        const description = "The dog or domestic dog, (Canis familiaris[4][5] or Canis lupus familiaris[5]) is a domesticated descendant of the wolf which is characterized by an upturning tail. The dog derived from an ancient, extinct wolf,[6][7] and the modern grey wolf is the dog's nearest living relative.[8] The dog was the first species to be domesticated,[9][8] by hunter–gatherers over 15,000 years ago,[7] before the development of agriculture.[1]";
        const title = "Dogs";
        const columns = [
          {
              title: "Resources",
              resources: [
                  {
                      name: "About",
                      link: "/about"
                  },
                  {
                      name: "Careers",
                      link: "/careers"
                  },
                  {
                      name: "Contact",
                      link: "/contact"
                  },
                  {
                      name: "Admin",
                      link: "/admin"
                  }
              ]
          },
          {
              title: "Legal",
              resources: [
                  {
                      name: "Privacy",
                      link: "/privacy"
                  },
                  {
                      name: "Terms",
                      link: "/terms"
                  }
              ]
          },
          {
              title: "Visit",
              resources: [
                  {
                      name: "Locations",
                      link: "/locations"
                  },
                  {
                      name: "Culture",
                      link: "/culture"
                  }
              ]
          }
       ];
       return <SimpleReactFooter 
          description={description} 
          title={title}
          columns={columns}
          linkedin="fluffy_cat_on_linkedin"
          facebook="fluffy_cat_on_fb"
          twitter="fluffy_cat_on_twitter"
          instagram="fluffy_cat_live"
          youtube="UCFt6TSF464J8K82xeA?"
          pinterest="fluffy_cats_collections"
          copyright="black"
          iconColor="black"
          backgroundColor="bisque"
          fontColor="black"
          copyrightColor="darkgrey"
       />;
      };
}

export default Footer;