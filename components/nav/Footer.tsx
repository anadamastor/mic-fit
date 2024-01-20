import { AppBar, Typography } from "@mui/material";
{
  /* <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
        <Link href="/users">Users List</Link> |{" "}
        <a href="/api/users">Users API</a> */
}
export const Footer = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "black" }}>
      <Typography variant="h6" noWrap sx={{ mr: 3 }}>
        Footer
      </Typography>
    </AppBar>
  );
};
