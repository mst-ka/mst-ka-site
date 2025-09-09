import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Grid,
  LinearProgress,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  MobileStepper,
  useTheme,
  useMediaQuery,
  Link,
  Alert,
  AlertTitle,
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EditNoteIcon from "@mui/icons-material/EditNote";
import StarIcon from "@mui/icons-material/Star";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EventIcon from "@mui/icons-material/Event";
import Banner from "../components/Layout/Banner/Banner";
import Image from "next/image";
import React from "react";

const FurnitureFundraiser = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("tablet"));
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const currentAmount = 22894;
  const goalAmount = 17000;
  const progress = Math.min((currentAmount / goalAmount) * 100, 100);

  const furnitureImages = [
    {
      imageUrl: "/images/furniture-fundraiser/adirondack.png",
      description: "Nautical 3-Piece Curveback Adirondack Set",
      productUrl:
        "https://www.polywood.com/products/nautical-3-piece-curveback-adirondack-set-pws419-1?variant=45792947896547",
    },
    {
      imageUrl: "/images/furniture-fundraiser/table.png",
      description: '48" Round Farmhouse Dining Table',
      productUrl:
        "https://www.polywood.com/products/48-round-farmhouse-dining-table-rt248?variant=45794136686819",
    },
    {
      imageUrl: "/images/furniture-fundraiser/chairs.png",
      description: "Palm Coast 4-Piece Upright Adirondack Conversation Set",
      productUrl:
        "https://www.polywood.com/products/palm-coast-4-piece-upright-adirondack-conversation-set-pws1528-1?variant=45792825999587",
    },
  ];

  return (
    <>
      <Banner text="Beta Alpha Outdoor Furniture Fundraiser" />
      <Container
        maxWidth="desktop"
        sx={{
          py: { mobile: 2, tablet: 4 },
          px: { mobile: 2, tablet: 3, laptop: 4 },
        }}
      >
        <Typography sx={{ marginBottom: "1rem" }}>
          In coordination with the Beta Alpha Education Foundation (BAEF), the
          Beta Alpha Alumni Association (BAAA) is organizing this fundraiser to
          replace the deteriorating outdoor furniture on our chapter house
          veranda. This space has long served as a meaningful extension of the
          chapter house—where brothers connect, study, and create lasting
          memories. Now, it&apos;s time to update it with durable, comfortable
          furniture that will serve both active members and alumni for years to
          come.
        </Typography>

        <Typography sx={{ marginBottom: "1rem" }}>
          Your support brings us closer to transforming the veranda into a
          versatile, welcoming environment—ideal for studying, casual
          conversations, alumni gatherings, or simply enjoying the outdoors and
          our shared brotherhood. Thank you for considering a gift to help us
          renew this important space.
        </Typography>
        <Typography>
          If you have any questions at all, please reach out to BAAA via email
          at:{" "}
          <Link href="mailto:betaalphaalumni1903@gmail.com">
            betaalphaalumni1903@gmail.com
          </Link>
        </Typography>

        {/* Progress Section */}
        <Box sx={{ marginY: "3rem" }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Fundraising Progress
          </Typography>
          <Card sx={{ padding: "2rem", maxWidth: "60rem", margin: "0 auto" }}>
            <Box sx={{ marginBottom: "0.5rem" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.5rem",
                }}
              >
                <Typography variant="h5">
                  ${currentAmount.toLocaleString()}
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <Typography variant="body1">of</Typography>
                  <Typography variant="h5">
                    ${goalAmount.toLocaleString()}
                  </Typography>
                </Box>
              </Box>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  height: "1.5rem",
                  borderRadius: "0.75rem",
                  "& .MuiLinearProgress-bar": {
                    borderRadius: "0.75rem",
                  },
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "0.5rem",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  {currentAmount >= goalAmount
                    ? "100% funded"
                    : `${Math.round(progress)}% funded`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {currentAmount >= goalAmount
                    ? "🎉 $0 to go! 🎉"
                    : `${(goalAmount - currentAmount).toLocaleString()} to go`}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
                <Typography
                  variant="h6"
                  align="center"
                  color="primary"
                  sx={{ mb: 1 }}
                >
                  Thank You to Our Generous Donors!
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  align="center"
                >
                  We are incredibly grateful for your generous contributions.
                  Thanks to you, we have exceeded our goal and can now provide
                  comfortable and durable outdoor furniture for generations of
                  KA brothers to come.
                  <br />
                  <br />
                  While this fundraiser is complete, you can still support our
                  chapter by donating to the Beta Alpha Education Foundation
                  (BAEF), which provides scholarships and educational funding to
                  our active members.
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "2rem",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="https://baedu.org/baef-donation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    padding: "0.75rem 2rem",
                    fontSize: "1.1rem",
                  }}
                  endIcon={<FavoriteIcon />}
                >
                  Donate to the BAEF
                </Button>
              </Box>
            </Box>
          </Card>
        </Box>

        {/* Project Details Section */}
        <Box sx={{ marginTop: "3rem" }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Project Details
          </Typography>
          <Typography variant="body1" paragraph>
            We have selected{" "}
            <Link
              href="https://www.polywood.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Polywood
            </Link>{" "}
            furniture for our outdoor space, a premium brand known for its
            exceptional quality and durability. Polywood furniture is crafted
            from recycled high-density polyethylene (HDPE) plastic, making it:
          </Typography>
          <ul style={{ marginBottom: "1.5rem" }}>
            <li>
              <Typography variant="body1" paragraph>
                100% weather-resistant and maintenance-free
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                UV-resistant and won&apos;t fade, crack, or splinter
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Eco-friendly, made from recycled materials
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Backed by a 20-year residential warranty; guaranteed against
                splintering, cracking, chipping, peeling, rotting, or insect
                damage.
              </Typography>
            </li>
          </ul>
          <Typography variant="body1" paragraph>
            The furniture pieces we&apos;ve selected are designed to withstand
            the elements year-round, requiring minimal maintenance while
            providing maximum comfort and style. Each piece comes with
            Polywood&apos;s comprehensive warranty, ensuring your investment
            will last for decades to come.
            <br />
            <br />
            Check out the furniture pieces we plan to purchase:
          </Typography>

          {/* Image Gallery */}
          {isMobile ? (
            <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "15rem",
                  width: "100%",
                  maxWidth: "20rem",
                  margin: "0 auto",
                }}
              >
                <CardActionArea
                  component={Link}
                  href={furnitureImages[activeStep].productUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ height: "100%" }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "auto",
                      position: "relative",
                      backgroundColor: "grey.200",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={furnitureImages[activeStep].imageUrl}
                      alt={furnitureImages[activeStep].description}
                      sx={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                    >
                      {furnitureImages[activeStep].description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <MobileStepper
                steps={furnitureImages.length}
                position="static"
                activeStep={activeStep}
                sx={{
                  maxWidth: "20rem",
                  margin: "1rem auto 0",
                  backgroundColor: "transparent",
                }}
                nextButton={
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === furnitureImages.length - 1}
                  >
                    Next
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                    Back
                  </Button>
                }
              />
            </Box>
          ) : (
            <Grid
              container
              spacing={3}
              sx={{
                marginBottom: "1rem",
                justifyContent: "center",
              }}
            >
              {furnitureImages.map((image, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      minHeight: "15rem",
                      width: "100%",
                      maxWidth: "25rem",
                    }}
                  >
                    <CardActionArea
                      component={Link}
                      href={image.productUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ height: "100%" }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "auto",
                          backgroundColor: "grey.200",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          overflow: "hidden",
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={image.imageUrl}
                          alt={image.description}
                          sx={{
                            width: "400px",
                            height: "320px",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          align="center"
                        >
                          {image.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          <Typography variant="h5" fontWeight="bold" sx={{ margin: "1rem" }}>
            How Funds Will Be Used
          </Typography>
          <TableContainer
            component={Paper}
            sx={{
              maxWidth: { mobile: "100%", tablet: "auto" },
              margin: "1rem auto 0",
              padding: { mobile: "0 0.25rem", tablet: 0 },
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      padding: { xs: "0.25rem", sm: "0.5rem" },
                      whiteSpace: "normal",
                    }}
                  >
                    Item
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      padding: { xs: "0.25rem", sm: "0.5rem" },
                      width: "2.5rem",
                    }}
                  >
                    Qty
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      padding: { xs: "0.25rem", sm: "0.5rem" },
                      width: "4.5rem",
                    }}
                  >
                    Unit
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      padding: { xs: "0.25rem", sm: "0.5rem" },
                      width: "5rem",
                    }}
                  >
                    Total
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="left" scope="row">
                    Adirondack & Side Table 3-Piece Set
                  </TableCell>
                  <TableCell align="right">10</TableCell>
                  <TableCell align="right">$615</TableCell>
                  <TableCell align="right">$6,150</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" scope="row">
                    Dining Table
                  </TableCell>
                  <TableCell align="right">3</TableCell>
                  <TableCell align="right">$569</TableCell>
                  <TableCell align="right">$1,707</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" scope="row">
                    Dining Chairs 4-Piece Set
                  </TableCell>
                  <TableCell align="right">4</TableCell>
                  <TableCell align="right">$1,449</TableCell>
                  <TableCell align="right">$5796</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" scope="row">
                    Shipping & Handling
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">$1,199</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" scope="row">
                    Recognition Plaque
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">$TBD</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" scope="row">
                    <Typography variant="h6">Total Cost</Typography>
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell
                    align="right"
                    sx={{ whiteSpace: { mobile: "normal", tablet: "nowrap" } }}
                  >
                    <Typography variant="h6">$14,852 + Plaque</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Recognition Levels */}
        <Box sx={{ marginTop: "3rem", marginBottom: "2rem" }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Recognition Levels
          </Typography>
          <Typography variant="body1" paragraph>
            We deeply appreciate any gift that helps us reach our goal. Every
            donor who contributes $500 or more will have their name recognized
            on a plaque proudly displayed on our Veranda. This plaque celebrates
            everyone who supports making our outdoor space a welcoming place for
            actives and alumni alike to enjoy for years to come.
          </Typography>
          <Typography variant="body1" paragraph>
            If you&apos;re donating with a group of brothers—like a pledge class
            or alumni group—you can choose to be recognized collectively by your
            group&apos;s name on the plaque. It&apos;s a great way to honor your
            shared commitment and leave a lasting mark together.
          </Typography>

          {/* Tier Cards */}
          <Grid container direction="column" spacing={3} alignItems="center">
            {/* $500+ */}
            <Grid item xs={12} sx={{ width: "100%", maxWidth: "30rem" }}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  background:
                    "linear-gradient(90deg, #FFF9E5 0%, #FFF3C0 100%)",
                  boxShadow: 2,
                }}
              >
                <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
                  <StarIcon sx={{ fontSize: 40, color: "#CD7F32" }} />
                </Box>
                <CardContent>
                  <Typography variant="h5" fontWeight="bold">
                    Bronze - $500+
                  </Typography>
                  <Typography variant="body2">
                    Your name will be listed on the plaque as a valued member
                    helping us take the first step toward improving our outdoor
                    space.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* $1,000+ */}
            <Grid item xs={12} sx={{ width: "100%", maxWidth: "30rem" }}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  background:
                    "linear-gradient(90deg, #F5F5F5 0%, #E0E0E0 100%)",
                  boxShadow: 2,
                }}
              >
                <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
                  <EmojiEventsIcon sx={{ fontSize: 40, color: "#A9A9A9" }} />
                </Box>
                <CardContent>
                  <Typography variant="h5" fontWeight="bold">
                    Silver - $1,000+
                  </Typography>
                  <Typography variant="body2">
                    Recognized in a higher giving tier, your support shows a
                    deeper commitment to enhancing our chapter house experience.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* $2,000+ */}
            <Grid item xs={12} sx={{ width: "100%", maxWidth: "30rem" }}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  background:
                    "linear-gradient(90deg, #FFE082 0%, #FFD180 100%)",
                  boxShadow: 2,
                }}
              >
                <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
                  <WorkspacePremiumIcon
                    sx={{ fontSize: 40, color: "#FFA000" }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h5" fontWeight="bold">
                    Gold - $2,000+
                  </Typography>
                  <Typography variant="body2">
                    Included among our top donors, your generosity plays a key
                    role in making the Veranda a place everyone can enjoy.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Top Donor */}
            <Grid item xs={12} sx={{ width: "100%", maxWidth: "30rem" }}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  background:
                    "linear-gradient(90deg, #b71c1c 0%, #d32f2f 100%)",
                  color: "#E5E4E2",
                  boxShadow: 4,
                }}
              >
                <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
                  <MilitaryTechIcon sx={{ fontSize: 40, color: "#E5E4E2" }} />
                </Box>
                <CardContent>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{
                      color: "#E5E4E2",
                    }}
                  >
                    Platinum - Top Donor
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#E5E4E2",
                    }}
                  >
                    The largest individual or group donation will receive
                    special, prominent placement on the plaque as a thank-you
                    for leading this effort.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default FurnitureFundraiser;
