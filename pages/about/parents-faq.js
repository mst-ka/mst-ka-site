import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Banner from "../../components/Layout/Banner/Banner";

function ParentsFAQ() {
  return (
    <div>
      <Banner text="Parents' Frequently Asked Questions " />
      <Container sx={{ padding: { mobile: "2rem", laptop: "2rem 20rem" } }}>
        For your son, making the transition from high school or community
        college to a four-year college or university may seem like an imposing
        challenge. The Beta Alpha Chapter of Kappa Alpha Order knows you may be
        thinking about one or more of the following questions:
        <br />
        <br />
        <List
          dense
          sx={{
            listStyleType: "disc",
            paddingLeft: "2rem",
            "& .MuiListItem-root": {
              display: "list-item",
            },
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Will I fit in and make new friends?
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Will I succeed academically?
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Will I be able to get involved in campus organizations and better my
            leadership skills?
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Will I find other people interested in the same things that I am?
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            How can I prepare for my career?
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Will I feel like a part of the campus community or just another
            number?
          </ListItem>
        </List>
        <br />
        Fraternities exist as a proven support network for your son as he
        embarks on this new period in his life. Over 400,000 students across the
        country are currently fraternity members.
        <br />
        <br />
        The fraternity can help personalize your son&apos;s college experience
        by offering a scholastic support system, hands-on experience in leading
        committees, experience managing and creating budgets, interactions with
        faculty and administrators, exposure to potential careers through
        educational programs and discussions with alumni, the chance to give
        back to the community through service projects, and close friends who
        will cheer him on when he is successful and support him when times are
        tough. With all these opportunities available to them, it is no wonder
        that fraternity members tend to graduate from college at a higher rate
        than those men not involved in fraternities.
        <br />
        <br />
        As a parent, you are undoubtedly concerned about your son&apos;s college
        experience and the choices he will make. Below, we answer some of the
        questions you may have about fraternity membership.
        <br />
        <br />
        <Accordion
          sx={{ backgroundColor: "primary.main", color: "white.main" }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography fontStyle={"italic"}>
              Are fraternities like the one shown in the movie Animal House?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nobody likes stereotypes. Unfortunately, after the showing of that
              movie, fraternity members have been categorized as partiers,
              irresponsible and abusive. In reality, fraternities are
              values-based organizations dedicated to the development of
              character and lifelong friendship.
              <br />
              <br />
              The following are some basic expectations of fraternal membership:
              I will strive for academic achievement and practice academic
              integrity; I will respect the dignity of all persons, therefore I
              will not physically, mentally, psychologically or sexually abuse
              or haze any human being; I will respect my property and the
              property of others, therefore, I will neither abuse nor tolerate
              the abuse of property; I will neither use nor support the use of
              illegal drugs; I will neither misuse nor support the misuse of
              alcohol; I acknowledge that a clean and attractive environment is
              essential to both physical and mental health, therefore, I will do
              all in my power to see that the chapter property is properly
              cleaned and maintained; I will challenge all my fraternity members
              to abide by these fraternal expectations and will confront those
              who violate them.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "primary.main", color: "white.main" }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography fontStyle={"italic"}>
              The expectations about alcohol. What is it REALLY like in the
              fraternity?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Alcohol abuse is unhealthy and inconsistent with fraternal ideas.
              All fraternities are expected to uphold state, county, and city
              laws, and university policies regarding the consumption of
              alcohol. In addition, most are not allowed to purchase alcohol for
              members. The days of large quantities of alcohol at a social
              function are gone. Instead, you will find fraternity members
              participating in alcohol-free social activities like moonlight
              bowling, dinner exchanges, ect. Students who choose not to drink
              will know that it is ok and feel comfortable with their decision.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "primary.main", color: "white.main" }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography fontStyle={"italic"}>
              I&apos;m concerned about my son&apos;s grades. What impact would
              fraternity membership have?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Students often find managing their time difficult when moving from
              a highly structured high school environment to the freedoms of
              college. Fraternities assist in that transition by offering
              scholarship programs which might include study partners, mandatory
              study hours, and time management workshops. Your son can access
              the network of fraternity members who already know how to use
              campus resources like the library, study skills centers, computer
              labs, and academic advisors.
              <br />
              <br />
              While fraternities are concerned about the academic achievement of
              their members, your son is still ultimately responsible for
              utilizing the resources made available.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "primary.main", color: "white.main" }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography fontStyle={"italic"}>
              What about pledging or hazing?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              New fraternity members all experience a period of orientation.
              During this time your son and the other new members will
              participate in weekly meetings to learn about the university and
              fraternity, leadership retreats, community service projects, and
              activities designed to build friendships among new members and the
              older fraternity members.
              <br />
              <br />
              All fraternities oppose hazing and are committed to a membership
              education period which instills a sense of responsibility and
              commitment in the new members. This period will assist your son in
              overcoming some of his concerns about success in college.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "primary.main", color: "white.main" }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography fontStyle={"italic"}>
              Who is actually in charge of the fraternity?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Fraternity members elected to officer positions manage the
              day-to-day operations of the organization. These officers are
              assisted by members serving on committees and by alumni who act as
              advisors.
              <br />
              <br />
              In addition, most fraternities are part of a national fraternal
              organization which offers support, advice, and direction through a
              paid professional staff and regional volunteers. Professional
              staff from the college and university are also employed to assist
              and monitor the activities of fraternities.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "primary.main", color: "white.main" }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography fontStyle={"italic"}>
              Does it cost a lot of money to be in a fraternity?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Fraternity lodging and meals are highly competitive with other
              housing options. In the first year of membership, a few one-time
              expenses are assessed. After those initial payments are made, your
              son&apos;s only expense will be his regular dues. A variety of
              payment plans are offered depending on the financial situation of
              the member.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "primary.main", color: "white.main" }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography fontStyle={"italic"}>
              Being in a fraternity sounds like it takes a lot of time.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Participating in any worthwhile activity always requires an
              investment of one&apos;s time. Research has shown that involved
              college students are more likely to graduate and they report
              greater satisfaction with their college experience. Through his
              fraternity involvement your son will learn to balance his
              academic, work, campus involvement, and social commitments.
              member.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "primary.main", color: "white.main" }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography fontStyle={"italic"}>
              How does my son go about joining a fraternity?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Fraternities organize a recruitment process of meeting people and
              making friends which offers your son an opportunity to meet other
              people on campus and learn what each fraternity has to offer its
              members.
              <br />
              <br />
              Everyone likes to belong; to feel a part of something. Each
              fraternity has its own unique programs and strengths, yet all are
              primarily based on the development of character, social skills,
              friendship, service to humanity and academic skills. Just like
              researching, visiting and choosing a college, your son should seek
              out the fraternity that best fits his personality, needs and
              desires. He will find that there is a place for everyone.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "primary.main", color: "white.main" }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography fontStyle={"italic"}>
              What is my role as a parent?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Be supportive and learn as much as you can by asking questions of
              your son as he meets people through the recruitment process.
              Fraternity members will be more than happy to educate him (and
              you) about their organization.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
}

export default ParentsFAQ;
