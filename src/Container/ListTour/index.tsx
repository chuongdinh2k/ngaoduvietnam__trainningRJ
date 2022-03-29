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
    // hooks
    const dispatch = useDispatch();
    // component state
    const [page, setPage] = useState<number>(1);
    // search debounc query input
    const [userQuery, setUserQuery] = useState<string | undefined>("");
    const [loadingDebounce, setLoadingDebounce] = useState<boolean>(false);
    const [data, setData] = React.useState<Array<IDataTour>>();
    const updateQuery = async (value: string) => {
        // A search query api call.
        const res = await toursApi.getListFilterTours(
            {
                page: 1,
                limit: INFINITY_MAX,
            },
            { location: value }
        );
        setData(res.data.dataToursList);
        setLoadingDebounce(false);
    };
    const delayedQuery = useCallback(
        debounce((nextValue) => updateQuery(nextValue), 500),
        []
    );
    const onChangeDebounce = (e: string | undefined) => {
        setLoadingDebounce(true);
        setUserQuery(e);
        delayedQuery(e);
    };
    const handleChange = (event: ChangeEvent<any>, value: number) => {
        setPage(value);
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
