import { useState } from 'react';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import type { Team } from '../types';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';

interface TeamSelectorProps {
  teams: Team[];
  selectedTeam: Team | null;
  onSelectTeam: (team: Team) => void;
}

function TeamSelector({ teams, selectedTeam, onSelectTeam }: TeamSelectorProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="team-selector">
      <h2>Select a Team</h2>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button className="flex w-64 items-center justify-between rounded-md border px-3 py-2 text-sm">
            {selectedTeam ? selectedTeam.school : 'Select a team...'}
            <ChevronsUpDownIcon className="ml-2 size-4 opacity-50" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-0">
          <Command>
            <CommandInput placeholder="Search teams..." />
            <CommandList>
              <CommandEmpty>No team found.</CommandEmpty>
              <CommandGroup>
                {teams.map((team) => (
                  <CommandItem
                    key={team.id}
                    value={team.school}
                    onSelect={() => {
                      onSelectTeam(team);
                      setOpen(false);
                    }}
                  >
                    {team.school}
                    {selectedTeam?.id === team.id && <CheckIcon className="ml-auto size-4" />}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default TeamSelector;
