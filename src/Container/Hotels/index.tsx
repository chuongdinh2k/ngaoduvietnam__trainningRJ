import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import * as qs from "query-string";

import {
    AppPagination,
    ComponentBreadscrumb,
    ComponentHotelsBanner,
    ComponentHotelsContent,
    Footer,
    Header,
    StyledWrapContent,
} from "@components";
import { banner } from "@demos";
import { getListHotels } from "@redux";
import { useHistory } from "react-router-dom";
import { LIMIT_RECORD_6 } from "@configs";

export const Hotels = () => {
    // get params of url
    const parsed = qs.parse(location.search);
    // hooks
    const dispatch = useDispatch();
    const history = useHistory();
    // component state
    const [page, setPage] = useState<any>(parsed?.page || 1);
    const handleChange = (event: ChangeEvent<any>, value: string) => {
        setPage(value);
        history.push(`hotels?page=${value}&limit=${LIMIT_RECORD_6}`);
    };
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
                    <ComponentHotelsContent />
                    <AppPagination
                        totalPage={5}
                        showPerpage
                        currentPage={page}
                        handleChange={handleChange}
                    />
                </div>
            </StyledWrapContent>
            <Footer />
        </>
    );
};
