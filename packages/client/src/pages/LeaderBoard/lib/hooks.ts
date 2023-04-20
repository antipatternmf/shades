import { LevelsScores } from 'api';
import { useEffect, useState, useCallback } from 'react';

type LeaderboardRecord = {
  username: string;
  score: number;
};

type GetLeaderboardResponse = {
  items: LeaderboardRecord[];
  totalPages: number;
  currentPage: number;
};

const configuration = new LevelsScores.Configuration({
  baseOptions: { withCredentials: false },
});

const levelScoreApi = new LevelsScores.LevelScoreApi(configuration);
const pageSize = 10;

async function getLeaderboard(page = 0): Promise<GetLeaderboardResponse> {
  const result = await levelScoreApi.getAllTotals(page * pageSize, pageSize);
  const { items, offset, limit, total } = result.data;

  return {
    items: items.map(({ username, totalScore }) => ({ username, score: totalScore })),
    totalPages: Math.ceil(total / limit),
    currentPage: Math.ceil(offset / limit),
  };
}

export function useGetLeaderboard() {
  const [records, setRecords] = useState<LeaderboardRecord[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchLeaderboard = useCallback(async (nextPage = 0) => {
    setIsLoading(true);

    const leaderBoardData = await getLeaderboard(nextPage);

    setRecords(leaderBoardData.items);
    setTotalPages(leaderBoardData.totalPages);
    setPage(leaderBoardData.currentPage);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchLeaderboard();
  }, [fetchLeaderboard]);

  const forward = async () => {
    fetchLeaderboard(page + 1);
  };

  const backward = async () => {
    if (page < 1) {
      return;
    }

    fetchLeaderboard(page - 1);
  };

  return { records, forward, backward, page, totalPages, isLoading };
}
