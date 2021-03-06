import React, { ChangeEvent, useCallback, useState, createRef } from "react";
import { useDispatch } from "react-redux";

import {
    ComponentBreadscrumb,
    ComponentListTourBanner,
    ComponentListTourContent,
    Footer,
    Header,
    StyledWrapContent,
} from "@components";
import { banner } from "@demos";
import { getListTours, setLoading, useAppSelector, selectTour } from "@redux";
import { INFINITY_MAX, LIMIT_RECORD_6 } from "@configs";
import { debounce } from "lodash";
import { toursApi } from "@api";
import { IDataTour } from "@types";

export const ListTour = () => {
    //redux store
    const tour = useAppSelector(selectTour);
    // hooks
    const dispatch = useDispatch();
    // component state
    const [page, setPage] = useState<number>(1);
    // search debounc query input
    const [userQuery, setUserQuery] = useState<string | undefined>("");
    const [loadingDebounce, setLoadingDebounce] = useState<boolean>(false);
    const [data, setData] = React.useState<Array<IDataTour>>();
    // ref
    const refScroll = createRef<any>();
    const updateQuery = async () => {
        // A search query api call.
        const res = await toursApi.getListFilterTours(
            {
                page: 1,
                limit: INFINITY_MAX,
            },
            { location: userQuery }
        );
        setData(res.data.dataToursList);
        setLoadingDebounce(false);
    };
    const delayedQuery = useCallback(debounce(updateQuery, 500), [userQuery]);
    const onChangeDebounce = (e: string | undefined) => {
        setUserQuery(e);
        // delayedQuery(e);
    };
    const handleChange = (event: ChangeEvent<any>, value: number) => {
        setPage(value);
        if (tour.dataToursList.length && refScroll.current) {
            refScroll.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    // WHAT: search debounce
    React.useEffect(() => {
        setLoadingDebounce(true);
        delayedQuery();

        // Cancel the debounce on useEffect cleanup.
        return delayedQuery.cancel;
    }, [userQuery, delayedQuery]);
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
            <ComponentListTourBanner
                dataInputBounce={data}
                onChangeDebounce={onChangeDebounce}
                loadingDebounce={loadingDebounce}
                banner={banner.listTour}
                userQuery={userQuery}
            />
            <StyledWrapContent>
                <div className="wrapperContent">
                    <ComponentBreadscrumb />
                    <ComponentListTourContent
                        currentPage={page}
                        handlePaginationChange={handleChange}
                        ref={refScroll}
                    />
                </div>
            </StyledWrapContent>
            <Footer />
        </>
    );
};
