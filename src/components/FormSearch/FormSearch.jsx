import React, { useEffect, useState } from "react";
import IconSearch from "../Icon/IconSearch";
import { Link, useNavigate } from "react-router-dom";
import { pathDefault } from "../../common/path";
import { congViecService } from "../../services/congViec.service";
import { Dropdown } from "antd";
import useDebounce from "../../hooks/useDebounce";

const FormSearch = () => {
  const navigate = useNavigate();
  const [valueSearch, setValueSearch] = useState("");
  const [checkDropdown, setCheckDropdown] = useState(false);
  const [listJobSuggest, setListJobSuggest] = useState([]);
  const debounceValue = useDebounce(valueSearch, 1000);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`${pathDefault.listJob}?tenCongViec=${valueSearch}`);
  };
  const handleChange = (e) => {
    setValueSearch(e.target.value);
    if (!e.target.value) setCheckDropdown(false);
  };

  useEffect(() => {
    // Call API
    if (valueSearch) {
      congViecService
        .layCongViecTheoTen(debounceValue)
        .then((res) => {
          const newListJobSuggest = res.data.content
            .slice(0, 4)
            .map((item, index) => {
              return {
                key: index,
                label: (
                  <Link
                    to={`/chi-tiet-cong-viec/${item.id}`}
                    className="flex items-center space-x-4"
                  >
                    <img className="h-14" src={item.congViec.hinhAnh} alt="" />
                    <div>
                      <h4>{item.congViec.tenCongViec}</h4>
                      <p>{item.congViec.giaTien}</p>
                    </div>
                  </Link>
                ),
              };
            });
          setListJobSuggest(newListJobSuggest);
          setCheckDropdown(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [debounceValue]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Dropdown menu={{ items: listJobSuggest }} open={checkDropdown}>
          <div className="flex items-center justify-between pl-4 rounded-md border border-gray-400 min-w-[400px]">
            <input
              type="text"
              className="flex-1 focus:border-none focus:outline-none"
              placeholder="Vui lòng nhập công việc cần kiếm"
              value={valueSearch}
              onChange={handleChange}
            />
            <button type="submit" className="p-2">
              <IconSearch color="rgb(156 163 175)" />
            </button>
          </div>
        </Dropdown>
      </form>
    </div>
  );
};

export default FormSearch;
