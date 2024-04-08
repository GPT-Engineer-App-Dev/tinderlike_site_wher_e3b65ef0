import React, { useState } from "react";
import { Box, VStack, Text, Image, IconButton, Heading, useToast } from "@chakra-ui/react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const moods = [
  { id: 1, name: "Happy", image: "https://images.unsplash.com/photo-1590698933947-a202b069a861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGVtb2ppfGVufDB8fHx8MTcxMjYwMDg4OHww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "Energized", image: "https://images.unsplash.com/photo-1615031465602-20f3ff3ca279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbmVyZ2l6ZWQlMjBlbW9qaXxlbnwwfHx8fDE3MTI2MDA4ODh8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "Tired", image: "https://images.unsplash.com/photo-1526761732559-adb1b14a93d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0aXJlZCUyMGVtb2ppfGVufDB8fHx8MTcxMjYwMDg4OXww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 4, name: "Anxious", image: "https://images.unsplash.com/photo-1439402702863-6434b61e6392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbnhpb3VzJTIwZW1vaml8ZW58MHx8fHwxNzEyNjAwODkwfDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 5, name: "Motivated", image: "https://images.unsplash.com/photo-1615031465602-20f3ff3ca279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3RpdmF0ZWQlMjBlbW9qaXxlbnwwfHx8fDE3MTI2MDA4OTF8MA&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Index = () => {
  const [currentMoodIndex, setCurrentMoodIndex] = useState(0);
  const [selectedMoods, setSelectedMoods] = useState([]);
  const toast = useToast();

  const handleSwipe = (isLike) => {
    if (isLike) {
      setSelectedMoods([...selectedMoods, moods[currentMoodIndex]]);
      toast({
        title: `You selected ${moods[currentMoodIndex].name}`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
    setCurrentMoodIndex((prevIndex) => (prevIndex + 1) % moods.length);
  };

  return (
    <Box p={4}>
      <Heading mb={8} textAlign="center">
        Swipe Your Mood
      </Heading>
      {currentMoodIndex < moods.length ? (
        <VStack spacing={8}>
          <Image src={moods[currentMoodIndex].image} alt={moods[currentMoodIndex].name} boxSize="200px" objectFit="cover" borderRadius="full" />
          <Text fontSize="2xl">{moods[currentMoodIndex].name}</Text>
          <Box>
            <IconButton icon={<FaThumbsDown />} aria-label="Dislike" onClick={() => handleSwipe(false)} size="lg" mr={4} />
            <IconButton icon={<FaThumbsUp />} aria-label="Like" onClick={() => handleSwipe(true)} size="lg" />
          </Box>
        </VStack>
      ) : (
        <Box textAlign="center">
          <Text fontSize="xl" mb={4}>
            You've swiped through all the moods!
          </Text>
          <Text>Selected Moods: {selectedMoods.map((mood) => mood.name).join(", ")}</Text>
        </Box>
      )}
    </Box>
  );
};

export default Index;
