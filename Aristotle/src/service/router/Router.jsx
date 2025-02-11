import React, { lazy, useEffect, useState } from "react";
import shortid from "shortid";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  useParams,
} from "react-router-dom";
import AdminLayout from "../../component/AdminLayout";
import { LinearProgress, linearProgressClasses, styled } from "@mui/material";

const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 4,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "var(--color-accent)",
  },
}));

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

const importView = (page) =>
  lazy(() => {
    page = page || "";
    page = page
      .replaceAll(" ", "_")
      .split("_")
      ?.map((a) => capitalizeFirstLetter(a))
      .join("");
    return import(`../../pages/${page}`).catch(() =>
      import(`../../pages/NoPage`)
    );
  });

const importView2 = (folder, page) =>
  lazy(() => {
    page = page || "";
    page = page
      .replaceAll(" ", "_")
      .split("_")
      ?.map((a) => capitalizeFirstLetter(a))
      .join("");
    return import(`../../pages/${folder}/${page}`).catch(() =>
      import(`../../pages/NoPage`)
    );
  });

const importView3 = (page) =>
  lazy(() => {
    page = page || "";
    page = page
      .replaceAll(" ", "_")
      .split("_")
      ?.map((a) => capitalizeFirstLetter(a))
      .join("");
    return import(`../../pages/view/${page}`).catch(() =>
      import(`../../pages/NoPage`)
    );
  });

// const shortid = {
//     generate: () => {
//         return Math.random() * Date.now();
//     }
// }
const Router1 = () => {
  // var params = 1;
  var params = useParams();
  var userId = params.userId;
  const subredditsToShow = [userId];
  const [views, setViews] = useState([]);
  useEffect(() => {
    async function loadViews() {
      const componentPromises = subredditsToShow.map(async (subreddit) => {
        console.log(subreddit);
        const View = await importView(subreddit);
        return <View key={shortid.generate()} />;
      });

      Promise.all(componentPromises).then(setViews);
    }

    loadViews();
  }, [params]);

  return (
    <>
      {/* <h1>Pages {userId}  </h1>; */}
      <React.Suspense fallback="Loading views...">
        <div className="container_main"> {views}</div>
      </React.Suspense>
    </>
  );
};

const Router3 = () => {
  var params = useParams();
  // var params = 1;
  var userId = params.router2;
  const subredditsToShow = [userId];
  const [views, setViews] = useState([]);
  useEffect(() => {
    async function loadViews() {
      const componentPromises = subredditsToShow.map(async (subreddit) => {
        console.log(subreddit);
        const View = await importView3(subreddit);
        return <View key={shortid.generate()} />;
      });

      Promise.all(componentPromises).then(setViews);
    }

    loadViews();
  }, [params]);

  return (
    <>
      {/* <h1>Pages {userId} sss</h1>; */}
      <React.Suspense fallback="Loading views...">
        <div className="container_main"> {views}</div>
      </React.Suspense>
    </>
  );
};

const Router2 = () => {
  var params = useParams();
  var folder = params.router1;
  var router2 = params.router2;
  const subredditsToShow = [router2];
  const [views, setViews] = useState([]);
  useEffect(() => {
    async function loadViews() {
      const componentPromises = subredditsToShow.map(async (subreddit) => {
        console.log(subreddit);
        const View = await importView2(folder, subreddit);
        return <View key={shortid.generate()} />;
      });
      Promise.all(componentPromises).then(setViews);
      // init()
    }
    loadViews();
  }, [params]);

  return (
    <>
      {/* <AdminLayout> */}
      <React.Suspense fallback={<CustomLinearProgress/>}>{views}</React.Suspense>
      {/* </AdminLayout> */}
    </>
  );
};

// export default Router1 ;
export { Router1, Router2, Router3 };
