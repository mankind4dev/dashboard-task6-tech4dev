import { Avatar, Box, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const sidebar = useSelector((state) => state.sidebar.sidebarTitle);
  const suport = useSelector((state) => state.sidebar.sidebarSupport);
  const fullName = useSelector((state) => state.sidebar.sidebarUser);
  console.log(sidebar, "sidebar");
  console.log(suport, "sidebar");
  console.log(fullName, "sidebar");
  return (
    <>
      <Box
        width={{ lg: "100%" }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Box>
          <Box display={"flex"} py={3} justifyContent={"center"}>
            <img src="/images/tesla.png" alt="Logo" width={138} height={20} />
          </Box>
          <Box p={3} my={1}>
            {sidebar.map((lists, index) => (
              <Box
                key={index}
                display={"flex"}
                alignItems={"center"}
                mb={2}
                color={"rgba(0, 0, 0, 0.7)"}
                sx={{
                  color: "rgba(0, 0, 0, 0.7)",
                  "&:hover": {
                    bgcolor: "rgba(27, 89, 248, 0.1)",
                    borderRadius: "5px",
                  },
                  "&:active": {
                    bgcolor: "red",
                  },
                }}
              >
                <img
                  src={lists.iconImg}
                  alt={lists.name}
                  width={24}
                  height={24}
                />
                <Link underline="none" to={lists.link}>
                  <Typography>{lists.icon}</Typography>
                  <Typography
                    p={1}
                    fontSize={14}
                    fontWeight={500}
                    style={{ cursor: "pointer" }}
                  >
                    {lists.title}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>
          <Box px={3}>
            <Typography
              color={"rgba(0, 0, 0, 0.5)"}
              fontSize={16}
              fontWeight={600}
              mt={2}
            >
              Support
            </Typography>
            {suport.map((suport, index) => (
              <Box
                mt={1}
                key={index}
                display={"flex"}
                alignItems={"center"}
                sx={{
                  color: "rgba(0, 0, 0, 0.7)",
                  "&:hover": {
                    bgcolor: "rgba(27, 89, 248, 0.1)",
                    borderRadius: "5px",
                  },
                }}
              >
                <img
                  src={suport.iconImg}
                  alt={suport.name}
                  width={24}
                  height={24}
                />
                <Link underline="none" to={suport.link}>
                  <Typography
                    p={1}
                    fontSize={14}
                    fontWeight={500}
                    style={{ cursor: "pointer" }}
                  >
                    {suport.name}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          borderTop={"1px solid rgba(229, 229, 229, 1)"}
          width={"100%"}
          pt={4}
          pb={5}
          px={3}
        >
          <Avatar src="/images/user.png" />
          {fullName.map((name, index) => (
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={0.5}
              pt={2}
              key={index}
            >
              <Typography
                fontSize={14}
                fontWeight={600}
                color={"rgba(0, 0, 0, 1)"}
              >
                {name.fullName}
              </Typography>
              <Typography
                fontSize={12}
                fontWeight={400}
                color={"rgba(0, 0, 0, 0.5)"}
              >
                {name.email}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
