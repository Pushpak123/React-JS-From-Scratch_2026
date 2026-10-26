package com.example.demo.service;

import com.example.demo.dto.LeadDto;
import com.example.demo.entity.Interaction;
import com.example.demo.entity.Lead;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.LeadRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class LeadService {
    private LeadRepository leadRepository;

    public Lead save(Lead lead)
    {
        updateLeadToAllTheInteractions(lead);
        return leadRepository.save(lead);
    }
    public Lead update(int id, Lead lead) {

        Lead existingLead = leadRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Lead does not exist with id: " + id
                        ));

        // Update fields using the values received from React
        existingLead.setName(lead.getName());
        existingLead.setMobileNumber(lead.getMobileNumber());
        existingLead.setEmail(lead.getEmail());
        existingLead.setStatus(lead.getStatus());

        // Update interactions if provided
        if (lead.getInteractions() != null) {
            for (Interaction interaction : lead.getInteractions()) {
                interaction.setLead(existingLead);
            }
            existingLead.setInteractions(lead.getInteractions());
        }

        return leadRepository.save(existingLead);
    }

    public Lead read(int id)
    {
        return leadRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("lead are not exits with id:"+id));
    }
    public LeadDto readAll()
    {
        LeadDto leadDto=new LeadDto();
        Iterable<Lead>iterable=leadRepository.findAll();
        leadDto.setLeads(iterable);
        return leadDto;
    }

    private void updateLeadToAllTheInteractions(Lead lead) {
        if(lead.getInteractions()!=null)
        {
            for(Interaction interaction : lead.getInteractions())
            {
                interaction.setLead(lead);
            }
        }
    }
}
