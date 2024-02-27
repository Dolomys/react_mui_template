import { Table } from "@components/table/Table.component";
import { Stack, Typography } from "@mui/material";
import { HousingFilterStore } from "@store/tableFilters/table-filters.store";
import dayjs from "dayjs";
import { debounce } from "lodash";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { housingTableFakeData } from "src/fakeData/faker";

const HousingScreen = () => {
  const { filters, setFilters } = HousingFilterStore();
  const { t } = useTranslation();
  const [itemPerPage, setItemPerPage] = useState(1);
  const data = housingTableFakeData;

  const debouncedSetFilters = debounce((newValue) => {
    setFilters({ ...filters, page: 1, search: newValue });
  }, 500);

  return (
    <Stack>
      <Typography>Logements</Typography>
      <Table
        showTotal
        currentPage={filters.page}
        name={"Housings"}
        numberElementCanShow={itemPerPage == 1 ? setItemPerPage : undefined}
        totalPage={data.page}
        total={data.total}
        cells={data.housingInfos}
        // onClickCell={}
        onChangePage={(page) => setFilters({ ...filters, page })}
        headers={[
          { field: "", name: t("challenges:title") },
          {
            field: "type",
            name: t("challenges:type"),
            format: (value) => <Typography>{getChallengeTypeEnumRaw(value)}</Typography>,
          },
          {
            field: "startDate",
            name: t("challenges:date"),
            format: (value) => <Typography>{dayjs(value).format("DD/MM/YYYY")}</Typography>,
          },
          {
            field: "addresses",
            name: t("challenges:location"),
            format: (value) => {
              if (isArray(value)) return <Typography>{value[0].city}</Typography>;
            },
          },
          ...(!companyId
            ? [
                {
                  field: "companyName" as keyof ChallengeLight,
                  name: t("challenges:company"),
                },
              ]
            : []),
          { field: "registrants", name: t("challenges:registered") },
          {
            field: "state",
            name: t("challenges:state"),
            format: (value) => (
              <Typography>
                {value === ChallengeStateEnum.PUBLIC ? t("challenges:public") : t("challenges:company")}
              </Typography>
            ),
          },
          {
            field: "status",
            name: t("global:status"),
            format: (value) => <Stack width={"120px"}>{renderStatusChip(value)}</Stack>,
          },
        ]}
      />
    </Stack>
  );
};

export default HousingScreen;
