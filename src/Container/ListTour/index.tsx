import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import * as qs from "query-string";
import { useHistory } from "react-router-dom";

import {
    AppPagination,
    ComponentBreadscrumb,
    ComponentListTourBanner,
    ComponentListTourContent,
    ComponentLoader,
    Footer,
    Header,
    StyledWrapContent,
} from "@components";
import { banner } from "@demos";
import { getListTours, useAppSelector, setLoading, selectApp } from "@redux";
import { LIMIT_RECORD_6 } from "@configs";

export const ListTour = () => {
    // get params of url
    const parsed = qs.parse(location.search);
    // hooks
    const dispatch = useDispatch();
    const history = useHistory();
    // component state
    const [page, setPage] = useState<any>(parsed?.page || 1);
    const handleChange = (event: ChangeEvent<any>, value: string) => {
        setPage(value);
        history.push(`tours?page=${value}&limit=${LIMIT_RECORD_6}`);
    };
    React.useEffect(() => {
        dispatch(
            getListTours({
                page: page,
                limit: LIMIT_RECORD_6,
            })
        );
        const timer = setTimeout(() => {
            dispatch(setLoading(false));
        }, 2000);
        return () => clearTimeout(timer);
    }, [page]);
    return (
        <>
            <Header hasColor={false} />
            <ComponentListTourBanner banner={banner.listTour} />
            <StyledWrapContent>
                <div className="wrapperContent">
                    <ComponentBreadscrumb />
                     <ComponentListTourContent />
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
