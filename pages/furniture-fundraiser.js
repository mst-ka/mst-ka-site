import {
  Box,
  Container,
  Typography,
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

  // Placeholder for current donation amount - this would be dynamic in production
  const currentAmount = 0;
  const goalAmount = 17000;
  const progress = (currentAmount / goalAmount) * 100;

  const furnitureImages = [
    {
      imageUrl: "/images/furniture-fundraiser/adirondack.png",
      description: "Nautical Curveback Adirondack Chair",
      productUrl:
        "https://www.polywood.com/products/nautical-curveback-adirondack-chair-ad610?variant=45792917881059",
    },
    {
      imageUrl: "/images/furniture-fundraiser/table.png",
      description: '48" Round Farmhouse Dining Table',
      productUrl:
        "https://www.polywood.com/products/48-round-farmhouse-dining-table-rt248?variant=45794136686819",
    },
    {
      imageUrl: "/images/furniture-fundraiser/chair.png",
      description: "Palm Coast Upright Adirondack Chair",
      productUrl:
        "https://www.polywood.com/products/palm-coast-upright-adirondack-chair-hnu200?variant=45792813678819",
    },
    {
      imageUrl: "/images/furniture-fundraiser/sidetable.png",
      description: 'Long Island 18" Side Table',
      productUrl:
        "https://www.polywood.com/products/long-island-18-side-table-ect18?variant=45793115144419",
    },
  ];

  return (
    <>
      <Banner text="Beta Alpha Outdoor Furniture Fundraiser" />
      <Container
        sx={{
          padding: {
            mobile: "1.5rem",
            tablet: "2rem 4rem",
            laptop: "2rem 8rem",
          },
        }}
      >
        <Typography align="justify" sx={{ marginBottom: "1rem" }}>
          In coordination with the Beta Alpha Education Foundation (BAEF), the
          Beta Alpha Alumni Association (BAAA) is organizing this fundraiser to
          replace the deteriorating outdoor furniture on our chapter house
          veranda. This space has long been a gathering place where brothers
          share stories, celebrate, and build lasting memories. Now, it&apos;s
          time to update it with durable, comfortable furniture that will serve
          both active members and alumni for years to come.
        </Typography>

        <Typography align="justify" sx={{ marginBottom: "1rem" }}>
          With your support, we can provide a comfortable outdoor space that
          brings brothers together and serves the chapter for years to come.
          Every gift brings us closer to making the veranda a place where past,
          present, and future brothers can come together — whether for casual
          hangouts, special events, or simply enjoying the fresh air and
          camaraderie. Thank you for considering a gift to help us revitalize
          this important gathering spot!
        </Typography>
        <Typography align="justify">
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
                  {Math.round(progress)}% funded
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${(goalAmount - currentAmount).toLocaleString()} to go
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
                  href="#donate"
                  sx={{
                    padding: "0.75rem 2rem",
                    fontSize: "1.1rem",
                  }}
                  endIcon={<FavoriteIcon />}
                >
                  Donate Now
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
                    Adirondack Chairs
                  </TableCell>
                  <TableCell align="right">20</TableCell>
                  <TableCell align="right">$329</TableCell>
                  <TableCell align="right">$6,580</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" scope="row">
                    Dining Tables
                  </TableCell>
                  <TableCell align="right">3</TableCell>
                  <TableCell align="right">$569</TableCell>
                  <TableCell align="right">$1,707</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" scope="row">
                    Dining Chairs
                  </TableCell>
                  <TableCell align="right">12</TableCell>
                  <TableCell align="right">$389</TableCell>
                  <TableCell align="right">$4,668</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" scope="row">
                    Side Tables
                  </TableCell>
                  <TableCell align="right">10</TableCell>
                  <TableCell align="right">$79</TableCell>
                  <TableCell align="right">$790</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" scope="row">
                    Shipping & Handling
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">$TBD</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" scope="row">
                    Taxes (8.475%)
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">$1165</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" scope="row">
                    Recognition Plaque
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">~$1000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left" scope="row">
                    <Typography variant="h6">Total Cost</Typography>
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">
                    <Typography variant="h6">$15910 + S&H</Typography>
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
            We deeply appreciate every gift that helps improve our chapter
            house. Every donor who contributes $500 or more will have their name
            recognized on a plaque proudly displayed on our Veranda. This plaque
            celebrates everyone who supports making our outdoor space a
            welcoming place for actives and alumni alike to enjoy for years to
            come.
          </Typography>
          <Typography variant="body1" paragraph>
            If you’re donating with a group of brothers—like a pledge class or
            alumni group—you can choose to be recognized collectively by your
            group’s name on the plaque. It’s a great way to honor your shared
            commitment and leave a lasting mark together.
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
                    <StarIcon sx={{ fontSize: 40, color: "#FFD700" }} />
                  </Box>
                  <CardContent>
                    <Typography variant="h5" fontWeight="bold">
                      $500+
                    </Typography>
                    <Typography variant="body2">
                      Your name will be listed on the plaque as a valued member
                      helping us take the first step toward improving our
                      outdoor space.
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
                      "linear-gradient(90deg, #FFF3C0 0%, #FFE082 100%)",
                    boxShadow: 2,
                  }}
                >
                  <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
                    <EmojiEventsIcon sx={{ fontSize: 40, color: "#FFC107" }} />
                  </Box>
                  <CardContent>
                    <Typography variant="h5" fontWeight="bold">
                      $1,000+
                    </Typography>
                    <Typography variant="body2">
                      Recognized in a higher giving tier, your support shows a
                      deeper commitment to enhancing our chapter house
                      experience.
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
                      $2,000+
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
                    color: "#ffe082",
                    boxShadow: 4,
                  }}
                >
                  <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
                    <MilitaryTechIcon sx={{ fontSize: 40, color: "#FFD700" }} />
                  </Box>
                  <CardContent>
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      sx={{
                        color: "#ffe082",
                        textShadow: "1px 1px 4px #880808",
                      }}
                    >
                      Top Donor
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#ffe082",
                        textShadow: "1px 1px 4px #880808",
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

        {/* Ways to Donate */}
        <Box sx={{ marginTop: "3rem" }}>
          <Typography
            id="donate"
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{
              scrollMarginTop: "5rem", // This creates space above the element when scrolling to it
            }}
          >
            Ways to Donate
          </Typography>
          <Alert severity="info">
            <AlertTitle>Donor Info Needed for Recognition</AlertTitle>
            When making your donation, please be sure to include your{" "}
            <Typography component="span" fontWeight="bold" variant="body2">
              name, phone number, and email address{" "}
            </Typography>
            so we can properly recognize your contribution and reach out if any
            details need to be confirmed.
          </Alert>
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: "center",
              maxWidth: { mobile: "100%", tablet: "80rem" },
              margin: "0 auto",
              padding: { mobile: "0 1rem", tablet: 0 },
            }}
          >
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "20rem",
                  minWidth: "20rem",
                  width: "100%",
                  maxWidth: "25rem",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    padding: "2rem",
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      textAlign: "center",
                      marginBottom: "2rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <AccountBalanceWalletIcon sx={{ margin: "0.5rem" }} />
                    PayPal / Card
                  </Typography>
                  <Typography variant="body1" align="justify">
                    Make a secure donation through PayPal. You can use your
                    PayPal account or any major credit card.
                  </Typography>
                  <Box sx={{ flexGrow: 1 }} />
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: 2,
                        mt: 2,
                      }}
                    >
                      <Image
                        src="/images/furniture-fundraiser/BAEFPayPalQRCode.png"
                        alt="BAEF PayPal QR Code"
                        width={150}
                        height={150}
                      />
                    </Box>
                    <Button
                      variant="contained"
                      fullWidth
                      href="https://www.paypal.com/donate/?hosted_button_id=6RRJ3HQNZKSM4"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        padding: "0.75rem",
                        fontSize: "1.1rem",
                        backgroundColor: "#ffc439",
                        "&:hover": {
                          backgroundColor: "#e6b033",
                        },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Image
                        src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png"
                        alt="PayPal"
                        width={100}
                        height={26}
                      />
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "20rem",
                  minWidth: "20rem",
                  width: "100%",
                  maxWidth: "25rem",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    padding: "2rem",
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      textAlign: "center",
                      marginBottom: "2rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PhoneIphoneIcon sx={{ margin: "0.5rem" }} />
                    Venmo
                  </Typography>
                  <Typography align="justify" variant="body1">
                    Send your donation to:{" "}
                    <Typography component="span" sx={{ fontWeight: "bold" }}>
                      @BAEFDonate
                    </Typography>{" "}
                    or scan the QR code below:
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "1rem",
                    }}
                  >
                    <Image
                      src="/images/furniture-fundraiser/BAEFVenmoQRCode.png"
                      alt="BAEF Venmo QR Code"
                      width={200}
                      height={250}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "20rem",
                  minWidth: "20rem",
                  width: "100%",
                  maxWidth: "25rem",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    padding: "2rem",
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      textAlign: "center",
                      marginBottom: "2rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <EditNoteIcon sx={{ margin: "0.5rem" }} />
                    Check
                  </Typography>
                  <Typography align="justify" variant="body" paragraph>
                    Please make checks payable to &apos;Beta Alpha Education
                    Foundation&apos;, with &apos;BAAA Outdoor Furniture&apos; in
                    the memo line.
                  </Typography>
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      align="center"
                      variant="body"
                      sx={{ fontWeight: "bold" }}
                    >
                      Mail to:
                      <br />
                      Christopher Markus – BAEF Treasurer
                      <br />
                      PO Box 9473
                      <br />
                      Naperville, IL 60567-9473
                    </Typography>
                  </Box>
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
