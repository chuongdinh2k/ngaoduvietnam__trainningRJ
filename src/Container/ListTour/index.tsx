import React, { ChangeEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import * as qs from "query-string";
import { useHistory } from "react-router-dom";

import {
    AppPagination,
    ComponentBreadscrumb,
    ComponentListTourBanner,
    ComponentListTourContent,
    Footer,
    Header,
    StyledWrapContent,
} from "@components";
import { banner } from "@demos";
import { getListTours, setLoading } from "@redux";
import { INFINITY_MAX, LIMIT_RECORD_6 } from "@configs";
import { debounce } from "lodash";
import { toursApi } from "@api";

export const ListTour = () => {
    // get params of url
    const parsed = qs.parse(location.search);
    // hooks
    const dispatch = useDispatch();
    const history = useHistory();
    // component state
    const [page, setPage] = useState<any>(parsed?.page || 1);
    // search debounc query input
    const [userQuery, setUserQuery] = useState<string>("");
    const [loadingDebounce, setLoadingDebounce] = useState<boolean>(false);
    const [data, setData] = React.useState<any>();

    const updateQuery = async () => {
        // A search query api call.
        const res = await toursApi.getListFilterTours(
            {
                page: 1,
                limit: INFINITY_MAX,
            },
            { location: userQuery }
        );
        setData(res.data);
        setLoadingDebounce(false);
    };
    const delayedQuery = useCallback(debounce(updateQuery, 500), [userQuery]);
    React.useEffect(() => {
        setLoadingDebounce(true);
        delayedQuery();
        // Cancel the debounce on useEffect cleanup.
        return delayedQuery.cancel;
    }, [userQuery, delayedQuery]);
    const onChangeDebounce = (e: any) => {
        setUserQuery(e);
    };
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
            {/* <input name="input" value={userQuery} onChange={onChangeDebounce} /> */}
            <Header hasColor={false} />
            <ComponentListTourBanner
                dataInputBounce={data}
                onChangeDebounce={onChangeDebounce}
                loadingDebounce={loadingDebounce}
                banner={banner.listTour}
            />
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
