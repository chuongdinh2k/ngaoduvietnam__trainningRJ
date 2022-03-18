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
    // redux state
    const app = useAppSelector(selectApp);
    // const tours = useAppSelector(selectTour);
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
        dispatch(setLoading(true));
        dispatch(
            getListTours({
                page: page,
                limit: LIMIT_RECORD_6,
            })
        );
        dispatch(setLoading(false));
    }, [page]);
    console.log(app.loading);
    return (
        <>
            <Header hasColor={false} />
            <ComponentListTourBanner banner={banner.listTour} />
            <StyledWrapContent>
                <div className="wrapperContent">
                    <ComponentBreadscrumb />
                    {app.loading ? <ComponentLoader /> : <ComponentListTourContent />}
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
