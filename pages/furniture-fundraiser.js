import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
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
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
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
      url: "https://www.polywood.com/cdn/shop/files/efku5hbmu0yqnhjatlq2.jpg?v=1737500793&width=1000",
      description: "Nautical Curveback Adirondack Chair",
    },
    {
      url: "https://www.polywood.com/cdn/shop/files/xxcbmlxagcww6lqvfkbm.jpg?v=1737500115&width=1000",
      description: '48" Round Farmhouse Dining Table',
    },
    {
      url: "https://www.polywood.com/cdn/shop/files/t8ogblutusmhdpkfakqo.jpg?v=1737499950&width=1000",
      description: "Palm Coast Upright Adirondack Chair",
    },
    {
      url: "https://www.polywood.com/cdn/shop/files/dptgsm1ekgh8wffo0gtg.jpg?v=1737500825&width=1000",
      description: 'Long Island 18" Side Table',
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
          <Card sx={{ padding: "2rem" }}>
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
            Budget Breakdown - add warranty info
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Detailed budget breakdown coming soon...
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
                  <img
                    src={furnitureImages[activeStep].url}
                    alt={furnitureImages[activeStep].description}
                    style={{
                      width: "100%",
                      height: "100%",
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
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      minHeight: "15rem",
                      width: "100%",
                      maxWidth: "20rem",
                    }}
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
                      <img
                        src={image.url}
                        alt={image.description}
                        style={{
                          width: "100%",
                          height: "100%",
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
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          <TableContainer
            component={Paper}
            sx={{
              maxWidth: { mobile: "100%", tablet: "60rem" },
              margin: "0 auto",
              padding: { mobile: "0 1rem", tablet: 0 },
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell align="right">Estimated Cost</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography variant="subtitle1" fontWeight="medium">
                      Furniture Items
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      Detailed list of furniture items and costs will be added
                      here.
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body2" color="text.secondary">
                      TBD
                    </Typography>
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
                    sx={{ textAlign: "center", marginBottom: "2rem" }}
                  >
                    PayPal
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Send your donation to: [PayPal email address]
                  </Typography>
                  <Box sx={{ flexGrow: 1 }} />
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    href="https://www.paypal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      padding: "0.75rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    Donate with PayPal
                  </Button>
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
                    sx={{ textAlign: "center", marginBottom: "2rem" }}
                  >
                    Venmo
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Send your donation to: [Venmo username]
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Venmo QR code will be added here
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
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
                    sx={{ textAlign: "center", marginBottom: "2rem" }}
                  >
                    Check
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Please make checks payable to [Organization Name], with
                    &apos;BAAA Outdoor Furniture&apos; in the memo line.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Mail to:
                    <br />
                    [Organization name]
                    <br />
                    [Street address]
                    <br />
                    [City, State ZIP]
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Typography
            variant="body1"
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
