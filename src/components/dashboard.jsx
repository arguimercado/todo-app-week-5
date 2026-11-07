import { useState } from "react";
import FilterBar from "./filter-bar";
import TaskList from "./task-list";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../api/todos";

function normalizeData(data) {
  return {
    id: data.id,
    title: data.title,
    completed: data.completed,
    userId: data.userId,
  };
}

function reduceToUsers(todos) {
  return todos.reduce((acc, todo) => {
    if (!acc.includes(todo.userId)) {
      acc.push(todo.userId);
    }
    return acc;
  }, []);
}

export const Dashboard = () => {
  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getData,
    staleTime: 1 * 60 * 100,
    retry: false,
  });

  const [selectedUser, setSelectedUser] = useState(0);
  const [selectedStatus, setSelectedStatus] = useState("");
  const users = todos ? reduceToUsers(todos) : [];

  if (isLoading) return <p>Loading Please wait...</p>;
  if (isError) return <p>Error</p>;

  const filterData = todos.filter((todo) => {
    const matchesUser = selectedUser === 0 || todo.userId === selectedUser;
    const matchesStatus =
      selectedStatus === "" ||
      (selectedStatus === "Done" ? todo.completed : !todo.completed);
    return matchesUser && matchesStatus;
  });

  return (
    <section className="flex flex-col gap-5">
      <FilterBar
        users={users}
        onUserChange={setSelectedUser}
        selectedUser={selectedUser}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
      />
      <TaskList todos={filterData} />
    </section>
  );
};
