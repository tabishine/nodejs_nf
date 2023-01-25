// ✅ this is correct 👌
navigate("user/:userId", { userId: "2" });

// ✅ Looks good! `dashboardId` is optional.
navigate("user/:userId/dashboard(/:dashboardId)", { userId: "2" });

// ❌ `userId` is missing. Add one to fix the error!
navigate("user/:userId/dashboard(/:dashboardId)", { dashboardId: "2" });

// ❌ `oops` isn't a parameter. Remove it to fix the error!
navigate("user/:userId/dashboard(/:dashboardId)", { userId: "2", oops: ":(" });

// 🤫 Here are the kind of things you will soon be able to do! Or not :(
type ParseUrlParams<Url> = Url extends `${infer Path}(${infer OptionalPath})`
  ? ParseUrlParams<Path> & Partial<ParseUrlParams<OptionalPath>>
  : Url extends `${infer Start}/${infer Rest}`
  ? ParseUrlParams<Start> & ParseUrlParams<Rest>
  : Url extends `:${infer Param}`
  ? { [K in Param]: string }
  : {};

// navigate to a different route
function navigate<T extends string>(path: T, params: ParseUrlParams<T>) {
  // interpolate params
  let url = Object.entries<string>(params).reduce<string>(
    (path, [key, value]) => path.replace(`:${key}`, value),
    path
  );

  // clean url
  url = url.replace(/(\(|\)|\/?:[^\/]+)/g, "");

  // update url
  history.pushState({}, "", url);
}
