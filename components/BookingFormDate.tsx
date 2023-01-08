import React, { useCallback, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange, RangeKeyDict } from "react-date-range";
import moment from "moment";

type Bookdetails = {
  price: number;
  start_date: Date | undefined;
  end_date: Date | undefined;
  nights: number;
};

function BookingFormDate() {
  const [bookDetail, setbookDetail] = useState<Bookdetails>({
    price: 100,
    start_date: new Date(),
    end_date: moment().add(1, "days").toDate(),
    nights: 1,
  } as Bookdetails);

  const [toogleDateRange, setToogleDateRange] = useState(false);

  const handleChangeDate = (event: RangeKeyDict) => {
    const { startDate, endDate } = event.selection;
    const difBwtDate = moment(startDate).diff(moment(endDate), "days");

    setbookDetail((state) => ({
      ...state,
      start_date: startDate,
      end_date:
        difBwtDate == 0 ? moment(startDate).add(1, "days").toDate() : endDate,
      nights: difBwtDate == 0 ? 1 : Math.abs(difBwtDate),
    }));
  };

  const handleChangeNights = useCallback((type: string) => {
    if (type == "increase") {
      setbookDetail((state) => ({
        ...state,
        nights: state.nights + 1,
        end_date: moment(state.start_date)
          .add(state.nights + 1, "days")
          .toDate(),
      }));
    }

    if (type == "decrease") {
      setbookDetail((state) => ({
        ...state,
        nights: state.nights <= 1 ? state.nights : state.nights - 1,
        end_date:
          state.nights <= 1
            ? state.end_date
            : moment(state.start_date)
                .add(state.nights - 1, "days")
                .toDate(),
      }));
    }
  }, []);

  return (
    <div className="flex flex-col">
      <div className="pb-4">Start Booking</div>
      <div>How long you will stay?</div>
      <div className="flex flex-row justify-between items-center bg-gray-200 rounded-md">
        <div
          onClick={() => handleChangeNights("decrease")}
          className="cursor-pointer bg-red-500 py-4 px-6 rounded-md font-bold text-xl text-white"
        >
          -
        </div>
        <div>{bookDetail.nights} night</div>
        <div
          onClick={() => handleChangeNights("increase")}
          className="cursor-pointer bg-green-500 py-4 px-6 rounded-md font-bold text-xl text-white"
        >
          +
        </div>
      </div>
      <div className="mt-4">Pick A date</div>
      <button
        onClick={() => setToogleDateRange(!toogleDateRange)}
        className="flex flex-row justify-center bg-gray-200 rounded-md items-center p-4"
      >
        <div>
          {moment(bookDetail.start_date).format("DD MMM")} -{" "}
          {moment(bookDetail.end_date).format("DD MMM")}
        </div>
      </button>
      <div className="mt-4 transition duration-300 ease-in-out">
        {toogleDateRange && (
          <DateRange
            onChange={handleChangeDate}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={[
              {
                startDate: bookDetail.start_date,
                endDate: bookDetail.end_date,
                key: "selection",
              },
            ]}
          />
        )}
      </div>
    </div>
  );
}

export default BookingFormDate;
