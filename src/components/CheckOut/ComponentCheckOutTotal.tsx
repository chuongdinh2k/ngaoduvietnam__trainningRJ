import { ChangeEvent, FocusEvent } from "react";
import styled from "styled-components";
import { AppInput, GroupPeople, IconCalendar, IconLocation } from "..";

interface IValues {
    date?: string;
    group?: string;
}
interface IProps {
    handleChange: {
        (e: ChangeEvent<any>): void;
        <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
            ? void
            : (e: string | ChangeEvent<any>) => void;
    };
    handleBlur: {
        (e: FocusEvent<any, Element>): void;
        <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
    };
    values: IValues;
}
export const ComponentCheckOutTotal = (props: IProps) => {
    const { handleChange, handleBlur } = props;
    return (
        <StyledComponentCheckOutContent>
            <div className="wrapperTotal">
                <div className="content">
                    <h3 className="content__title">
                        Discover interesting things in the romantic coastal city of Vungtau
                    </h3>
                    <div className="content__location">
                        <span className="content__location-icon">
                            <IconLocation />
                        </span>
                        <p className="content__location-title">Vungtau City, Baria-Vungtau</p>
                    </div>
                    <div className="content__type">
                        <div className="content__type-left">
                            <p className="content__type-subText">Duration:</p>
                            <p className="content__type-text">3 days - 2 night</p>
                        </div>
                        <div className="content__type-left">
                            <p className="content__type-subText">Tour Type:</p>
                            <p className="content__type-text">Sun - Beach</p>
                        </div>
                    </div>
                    <div className="form__group">
                        <div className="form__group-input">
                            <AppInput
                                name="date"
                                handleChange={handleChange("date")}
                                handleBlur={handleBlur("date")}
                                placeholder="Enter duration"
                                icon={<IconCalendar />}
                                // error={errors.date}
                                value={props.values.date}
                            />
                        </div>
                        <div className="form__group-input">
                            <AppInput
                                name="group"
                                handleChange={handleChange("group")}
                                handleBlur={handleBlur("group")}
                                placeholder="Enter group of people"
                                icon={<GroupPeople />}
                                // error={errors.group}
                                value={props.values.group}
                            />
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <span>Total</span>
                    <span>$450.00</span>
                </div>
            </div>
        </StyledComponentCheckOutContent>
    );
};

const StyledComponentCheckOutContent = styled.div`
    .wrapperTotal {
        width: 100%;
        background-color: ${(p) => p.theme.colors.backgroundGray};
    }
    .content,
    .bottom {
        padding-left: 3rem;
        padding-right: 3.7rem;
    }
    .content {
        padding-top: 4rem;
        &__title {
            font-size: 1.8rem;
            color: ${(p) => p.theme.colors.darkBlack};
        }
        &__location {
            display: flex;
            font-size: 1.4rem;
            &-title {
                padding-left: 1.4rem;
                color: ${(p) => p.theme.colors.gray1};
            }
        }
        &__type {
            display: flex;
            &-left {
                margin-right: 3rem;
            }
            &-left,
            &-right {
                flex: 50%;
            }
            &-text {
                font-size: 1.4rem;
                font-weight: ${(p) => p.theme.typography.fontWeightMedium};
            }
            &-subText {
                font-size: 1.4rem;
                color: ${(p) => p.theme.colors.gray1};
            }
        }
    }
    .form__group {
        &-input {
            margin-top: 2rem;
        }
        .MuiInputBase-root {
            padding-left: 1.8rem;
        }
    }
    .bottom {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        color: ${(p) => p.theme.colors.pureWhite};
        background-color: ${(p) => p.theme.colors.darkBlack};
        padding-top: 3.4rem;
        padding-bottom: 3.4rem;
        font-size: 2rem;
    }
`;