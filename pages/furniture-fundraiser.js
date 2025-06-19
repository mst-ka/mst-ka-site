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
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EditNoteIcon from "@mui/icons-material/EditNote";
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
  const currentAmount = 8500;
  const goalAmount = 15000;
  const progress = (currentAmount / goalAmount) * 100;

  const donationTiers = [
    {
      amount: 500,
      name: "Individual Contribution", // Placeholder name
      benefits: [
        "Benefit 1",
        "Benefit 2",
        "Largest donation will be prominently recognized on a permanent plaque on the veranda",
      ],
    },
    {
      amount: 1000,
      name: "Group Contribution", // Placeholder name
      benefits: [
        "All Tier 1 benefits",
        "Benefit 4",
        "Largest donation will be prominently recognized on a permanent plaque on the veranda",
      ],
    },
  ];

  const furnitureImages = [
    {
      imageUrl:
        "/images/furniture-fundraiser/adirondack.png",
      description: "Nautical Curveback Adirondack Chair",
      productUrl:
        "https://www.polywood.com/products/nautical-curveback-adirondack-chair-ad610?variant=45792917881059",
    },
    {
      imageUrl:
        "/images/furniture-fundraiser/table.png",
      description: '48" Round Farmhouse Dining Table',
      productUrl:
        "https://www.polywood.com/products/48-round-farmhouse-dining-table-rt248?variant=45794136686819",
    },
    {
      imageUrl:
        "/images/furniture-fundraiser/chair.png",
      description: "Palm Coast Upright Adirondack Chair",
      productUrl:
        "https://www.polywood.com/products/palm-coast-upright-adirondack-chair-hnu200?variant=45792813678819",
    },
    {
      imageUrl:
        "/images/furniture-fundraiser/sidetable.png",
      description: 'Long Island 18" Side Table',
      productUrl:
        "https://www.polywood.com/products/long-island-18-side-table-ect18?variant=45793115144419",
    },
  ];

  return (
    <>
      <Banner text="BAAA Outdoor Furniture Fundraiser" />
      <Container
        sx={{
          padding: {
            mobile: "1.5rem",
            tablet: "2rem 4rem",
            laptop: "2rem 8rem",
          },
        }}
      >
        <Typography align="justify" sx={{ marginBottom: "2rem" }}>
          In coordination with the Beta Alpha Education Foundation (BAEF), the
          Beta Alpha Alumni Assocaiation is (BAAA) is organizing... description
          of fundraiser placeholder. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>

        {/* Progress Section */}
        <Box sx={{ marginY: "3rem" }}>
          <Typography variant="h4" gutterBottom>
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
                >
                  Donate Now
                </Button>
              </Box>
            </Box>
          </Card>
        </Box>

        {/* Donation Tiers */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{ marginTop: "3rem", marginBottom: "2rem" }}
        >
          Donation Tiers
        </Typography>
        <Grid
          container
          sx={{
            justifyContent: "center",
            maxWidth: { mobile: "100%", tablet: "80rem" },
            margin: "0 auto",
            padding: { mobile: "0 1rem", tablet: 0 },
            gap: "2rem",
          }}
        >
          {donationTiers.map((tier) => (
            <Grid
              item
              xs={12}
              md={6}
              key={tier.amount}
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingLeft: "0",
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "25rem",
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
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{
                      textAlign: "center",
                      marginBottom: "2rem",
                    }}
                  >
                    {tier.name} - ${tier.amount}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    paragraph
                    sx={{ marginBottom: "0.5rem" }}
                  >
                    Benefits include:
                  </Typography>
                  <Box sx={{ flexGrow: 1 }}>
                    <ul
                      style={{
                        listStyleType: "none",
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      {tier.benefits.map((benefit, index) => (
                        <li key={index} style={{ marginBottom: "0.5rem" }}>
                          <Typography variant="body1">
                            &bull; {benefit}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      marginTop: "2rem",
                      padding: "0.75rem",
                      fontSize: "1.1rem",
                    }}
                    href="#donate"
                  >
                    Donate ${tier.amount}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Budget Breakdown Section */}
        <Box sx={{ marginTop: "3rem" }}>
          <Typography variant="h4" gutterBottom>
            Budget Breakdown
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

          <TableContainer
            component={Paper}
            sx={{
              maxWidth: { mobile: "100%", tablet: "60rem" },
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
                    Taxes
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
                  <TableCell align="right">
                    <Typography variant="h6">$15,368</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Ways to Donate */}
        <Box sx={{ marginTop: "3rem" }}>
          <Typography
            id="donate"
            variant="h4"
            gutterBottom
            sx={{
              scrollMarginTop: "5rem", // This creates space above the element when scrolling to it
            }}
          >
            Ways to Donate
          </Typography>

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
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                    >
                      Please include &ldquo;BAAA Outdoor Furniture
                      Fundraiser&rdquo; in the note
                    </Typography>
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
                    sx={{ display: "flex", justifyContent: "center", mb: 2 }}
                  >
                    <Image
                      src="/images/furniture-fundraiser/BAEFVenmoQRCode.png"
                      alt="BAEF Venmo QR Code"
                      width={200}
                      height={250}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    align="center"
                    color="text.secondary"
                  >
                    Please include &ldquo;BAAA Outdoor Furniture
                    Fundraiser&rdquo; in the note
                  </Typography>
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
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Typography
            variant="body1"
            align="center"
            sx={{ marginTop: "2rem", color: "text.secondary" }}
          >
            Please include your name and contact information with your donation
            so we can properly recognize your contribution.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default FurnitureFundraiser;
