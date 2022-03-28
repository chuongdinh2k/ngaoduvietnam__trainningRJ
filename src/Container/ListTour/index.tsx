import React, { ChangeEvent, useCallback, useState } from "react";
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
import { getListTours, setLoading } from "@redux";
import { INFINITY_MAX, LIMIT_RECORD_6 } from "@configs";
import { debounce } from "lodash";
import { toursApi } from "@api";
import { IDataTour } from "@types";

export const ListTour = () => {
    // get params of url
    // const parsed = qs.parse(location.search);
    // hooks
    const dispatch = useDispatch();
    // const history = useHistory();
    // component state
    const [page, setPage] = useState<number>(1);
    // search debounc query input
    const [userQuery, setUserQuery] = useState<string>("");
    const [loadingDebounce, setLoadingDebounce] = useState<boolean>(false);
    const [data, setData] = React.useState<Array<IDataTour>>();
    const updateQuery = async () => {
        // A search query api call.
        const res = await toursApi.getListFilterTours(
            {
                page: 1,
                limit: INFINITY_MAX,
            },
            { location: userQuery }
        );
        setData(res.data.tours);
        setLoadingDebounce(false);
    };
    const delayedQuery = useCallback(debounce(updateQuery, 500), [userQuery]);
    React.useEffect(() => {
        setLoadingDebounce(true);
        delayedQuery();
        // Cancel the debounce on useEffect cleanup.
        return delayedQuery.cancel;
    }, [userQuery, delayedQuery]);
    const onChangeDebounce = (e: string) => {
        setUserQuery(e);
    };
    const handleChange = (event: ChangeEvent<any>, value: number) => {
        setPage(value);
        // history.push(`tours?page=${value}&limit=${LIMIT_RECORD_6}`);
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
                    />
                </div>
            </StyledWrapContent>
            <Footer />
        </>
    );
};
