import React, { ChangeEvent, useState, createRef } from "react";
import { useDispatch } from "react-redux";
import * as qs from "query-string";

import {
    ComponentBreadscrumb,
    ComponentHotelsBanner,
    ComponentHotelsContent,
    Footer,
    Header,
    StyledWrapContent,
} from "@components";
import { banner } from "@demos";
import { getListHotels } from "@redux";
import { LIMIT_RECORD_6 } from "@configs";

export const Hotels = () => {
    // get params of url
    const parsed = qs.parse(location.search);
    // hooks
    const dispatch = useDispatch();
    // component state
    const [page, setPage] = useState<number | undefined>(Number(parsed?.page) || 1);
    const handlePaginationChange = (event: ChangeEvent<any>, value: number) => {
        setPage(value);
        if (refScroll.current) {
            refScroll.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    // ref
    const refScroll = createRef<any>();
    React.useEffect(() => {
        dispatch(
            getListHotels({
                page: page,
                limit: LIMIT_RECORD_6,
            })
        );
    }, [page]);
    return (
        <>
            <Header hasColor={false} />
            <ComponentHotelsBanner banner={banner.hotels} />
            <StyledWrapContent>
                <div className="wrapperContent">
                    <ComponentBreadscrumb />
                    <ComponentHotelsContent
                        currentPage={page}
                        handlePaginationChange={handlePaginationChange}
                        ref={refScroll}
                    />
                </div>
            </StyledWrapContent>
            <Footer />
        </>
    );
};
