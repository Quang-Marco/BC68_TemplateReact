import React, { useEffect, useState } from "react";
import IconSearch from "../Icon/IconSearch";
import { Link, useNavigate } from "react-router-dom";
import { pathDefault } from "../../common/path";
import { congViecService } from "../../services/congViec.service";
import { Dropdown } from "antd";
import useDebounce from "../../hooks/useDebounce";

const FormSearch = ({ placeholder, classInput, classWrapper, classIcon }) => {
  const navigate = useNavigate();
  const [valueSearch, setValueSearch] = useState("");
  const [checkDropdown, setCheckDropdown] = useState(false);
  const [listJobSuggest, setListJobSuggest] = useState([]);
  const debounceValue = useDebounce(valueSearch, 1000);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`${pathDefault.listJob}?tenCongViec=${valueSearch}`);
    setCheckDropdown(false);
    setValueSearch("");
  };
  const handleChange = (e) => {
    setValueSearch(e.target.value);
    if (!e.target.value) setCheckDropdown(false);
  };

  useEffect(() => {
    if (valueSearch) {
      congViecService
        .layCongViecTheoTen(valueSearch)
        .then((res) => {
          console.log(res);
          setCheckDropdown(true);
          let newListJobSuggest = res.data.content;
          if (newListJobSuggest.length == 0) {
            newListJobSuggest.push({
              key: 1,
              label: (
                <p className="italic">Không tìm thấy kết quả nào phù hợp</p>
              ),
            });
          } else {
            newListJobSuggest = res.data.content
              .slice(0, 4)
              .map((item, index) => {
                return {
                  key: index,
                  label: (
                    <Link
                      to={`${pathDefault.listJob}?maCongViec=${item.id}`}
                      className="flex items-center space-x-4"
                      onClick={() => {
                        setCheckDropdown(false);
                        setValueSearch("");
                      }}
                    >
                      <img
                        className="h-14"
                        src={item.congViec.hinhAnh}
                        alt=""
                      />
                      <div>
                        <h4>{item.congViec.tenCongViec}</h4>
                        <p>{item.congViec.giaTien}</p>
                      </div>
                    </Link>
                  ),
                };
              });
          }
          setListJobSuggest(newListJobSuggest);
          setCheckDropdown(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [debounceValue]);

  return (
    <div className={classWrapper}>
      <form onSubmit={handleSubmit}>
        <Dropdown menu={{ items: listJobSuggest }} open={checkDropdown}>
          <div
            className={`flex items-center justify-between bg-white pl-4 border border-gray-400 ${classInput}`}
          >
            <input
              type="text"
              className="flex-1 focus:border-none focus:outline-none"
              placeholder={placeholder}
              value={valueSearch}
              onChange={handleChange}
            />
            <button
              type="submit"
              className={`hover:opacity-80 transition-opacity ${classIcon}`}
            >
              <IconSearch />
            </button>
          </div>
        </Dropdown>
      </form>
    </div>
  );
};

export default FormSearch;
