import SimpleReactFooter from "simple-react-footer";
import { withRouter } from 'react-router-dom';

class Footer extends SimpleReactFooter {
    render() {
        const description = "In the modern world where technology has created a variety in the ways to obtain knowledge, books are still considered to the best way to expand our vision and spread ideas. Hanashi aims at providing people with such opportunities to create a impact and thus obtain ideas in return. Because we believe books are an invaluable asset. ";
        const title = "Vision";
        const columns = [
            {
                title: "",
                resources: [
                    {
                        name: "",
                        link: ""
                    },
                    {
                        name: "",
                        link: ""
                    }
                ]
            },
          {
              title: "Resources",
              resources: [
                  {
                      name: "About",
                      link: "/about"
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

export default withRouter(Footer);