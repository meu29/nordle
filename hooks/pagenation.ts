import { useState } from "react";

export const usePagenation = (per_page_content_num: number, total_content_num: number): UsePagenation => {

    const [page, setPage] = useState<number>(1);

    const backPage = () => setPage(prev_page => prev_page === 1 ? prev_page : prev_page - 1);

    const fowardPage = () => setPage(prev_page => prev_page === Math.ceil(total_content_num / per_page_content_num) ? prev_page : prev_page + 1);

    const resetPage = () => setPage(() => 1);

    return { page, backPage, fowardPage, resetPage }

}