import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Lectures from "@/pages/Lectures";


// 라우터 설정
// 상위 App (헤더, 네비게이션메뉴, 푸터) -> 하위 라우트들


// section 핸들러 예시 - sidebar 표시 여부 등 설정 가능
// { path: "community", element: <Community />, 
// handle: { section: "community", sidebar: true, title: "커뮤니티" } },
// { path: "lectures/:id/room", element: <LectureRoom />, 
// handle: { section: "lecture", sidebar: false, title: "강의실" } },



const router = createBrowserRouter([
    { path: '/login', element: <Home /> },
    { path: '/signup', element: <Home /> },
    {
        path: "/",
        // 상위 컴포넌트
        element: <App />,
        children: [
            { index: true, element: <Home />, handle: { sidebar: false, title: "홈" } },
            { path: "lectures", element: <Lectures />, handle: { section: "lectures", sidebar: true, title: "강의" } },

        ]
    },



]);

export default router;